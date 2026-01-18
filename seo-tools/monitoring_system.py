#!/usr/bin/env python3
"""
Automated Monitoring System
Weekly crawls and orphan page detection with alerts
"""

import sys
import json
import csv
from pathlib import Path
from datetime import datetime
from typing import Dict, List
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


class OrphanMonitor:
    """Monitor site for new orphan pages and changes"""
    
    def __init__(self, project_root: str):
        self.project_root = Path(project_root)
        self.history_file = self.project_root / "seo-tools" / "monitoring" / "history.json"
        self.alerts_file = self.project_root / "seo-tools" / "monitoring" / "alerts.log"
        self.history: List[Dict] = []
        
        # Ensure monitoring directory exists
        self.history_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Load history
        self._load_history()
    
    def _load_history(self):
        """Load monitoring history"""
        if self.history_file.exists():
            try:
                with open(self.history_file, 'r') as f:
                    self.history = json.load(f)
            except Exception as e:
                print(f"⚠️  Error loading history: {e}")
                self.history = []
    
    def _save_history(self):
        """Save monitoring history"""
        try:
            with open(self.history_file, 'w') as f:
                json.dump(self.history, f, indent=2)
        except Exception as e:
            print(f"⚠️  Error saving history: {e}")
    
    def run_check(self, current_data: Dict) -> Dict:
        """Run monitoring check"""
        print("\n🔍 Running monitoring check...")
        
        timestamp = datetime.now().isoformat()
        
        # Current stats
        total_pages = len(current_data['all_pages'])
        orphan_count = len(current_data['orphan_pages'])
        
        # Compare with previous run
        changes = {
            'timestamp': timestamp,
            'total_pages': total_pages,
            'orphan_count': orphan_count,
            'new_orphans': [],
            'fixed_orphans': [],
            'alerts': []
        }
        
        if len(self.history) > 0:
            previous = self.history[-1]
            
            # Find new orphans
            prev_orphans = set(p['url'] for p in previous.get('orphan_pages', []))
            curr_orphans = set(p['url'] for p in current_data['orphan_pages'])
            
            changes['new_orphans'] = list(curr_orphans - prev_orphans)
            changes['fixed_orphans'] = list(prev_orphans - curr_orphans)
            
            # Generate alerts
            if len(changes['new_orphans']) > 0:
                changes['alerts'].append(f"🚨 {len(changes['new_orphans'])} NEW orphan pages detected!")
            
            if len(changes['fixed_orphans']) > 0:
                changes['alerts'].append(f"✅ {len(changes['fixed_orphans'])} orphan pages fixed!")
            
            if orphan_count > previous['orphan_count'] * 1.2:
                changes['alerts'].append(f"⚠️  Orphan count increased by >20%!")
        
        # Save to history
        self.history.append({
            'timestamp': timestamp,
            'total_pages': total_pages,
            'orphan_count': orphan_count,
            'orphan_pages': current_data['orphan_pages']
        })
        self._save_history()
        
        # Log alerts
        if changes['alerts']:
            self._log_alerts(changes)
        
        print(f"✅ Monitoring check complete")
        print(f"   Total Pages: {total_pages}")
        print(f"   Orphan Pages: {orphan_count}")
        print(f"   New Orphans: {len(changes['new_orphans'])}")
        print(f"   Fixed Orphans: {len(changes['fixed_orphans'])}")
        
        return changes
    
    def _log_alerts(self, changes: Dict):
        """Log alerts to file"""
        try:
            with open(self.alerts_file, 'a') as f:
                f.write(f"\n{'='*60}\n")
                f.write(f"Alert Time: {changes['timestamp']}\n")
                for alert in changes['alerts']:
                    f.write(f"{alert}\n")
                
                if changes['new_orphans']:
                    f.write("\nNew Orphan Pages:\n")
                    for url in changes['new_orphans']:
                        f.write(f"  - {url}\n")
                
                if changes['fixed_orphans']:
                    f.write("\nFixed Orphan Pages:\n")
                    for url in changes['fixed_orphans']:
                        f.write(f"  - {url}\n")
        except Exception as e:
            print(f"⚠️  Error logging alerts: {e}")
    
    def generate_report(self, output_path: str):
        """Generate monitoring history report"""
        if not self.history:
            print("No monitoring history available")
            return
        
        print(f"\n📊 Generating monitoring report to {output_path}...")
        
        with open(output_path, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=[
                'Timestamp', 'Total Pages', 'Orphan Count', 'Change vs Previous'
            ])
            
            writer.writeheader()
            
            for i, record in enumerate(self.history):
                change = 0
                if i > 0:
                    change = record['orphan_count'] - self.history[i-1]['orphan_count']
                
                writer.writerow({
                    'Timestamp': record['timestamp'],
                    'Total Pages': record['total_pages'],
                    'Orphan Count': record['orphan_count'],
                    'Change vs Previous': f"{change:+d}" if i > 0 else 'N/A'
                })
        
        print("✅ Report generated")
    
    def send_alert_email(self, changes: Dict, recipient: str):
        """Send email alert (requires email configuration)"""
        if not changes['alerts']:
            return
        
        print(f"\n📧 Preparing alert email...")
        print(f"   Recipient: {recipient}")
        print(f"   Alerts: {len(changes['alerts'])}")
        print("   ℹ️  Email sending requires SMTP configuration")
        
        # Email content
        subject = f"SEO Alert: Orphan Pages Detected - {datetime.now().strftime('%Y-%m-%d')}"
        body = self._format_email_body(changes)
        
        print("\n--- Email Content ---")
        print(f"Subject: {subject}")
        print(body)
        print("--- End Email ---\n")
        
        # Note: Actual email sending would require SMTP configuration
        print("ℹ️  Configure SMTP settings to enable email alerts")
    
    def _format_email_body(self, changes: Dict) -> str:
        """Format email alert body"""
        lines = []
        lines.append(f"Orphan Page Monitoring Alert")
        lines.append(f"Date: {changes['timestamp']}")
        lines.append("")
        
        for alert in changes['alerts']:
            lines.append(alert)
        lines.append("")
        
        lines.append(f"Current Statistics:")
        lines.append(f"  Total Pages: {changes['total_pages']}")
        lines.append(f"  Orphan Pages: {changes['orphan_count']}")
        lines.append("")
        
        if changes['new_orphans']:
            lines.append(f"New Orphan Pages ({len(changes['new_orphans'])}):")
            for url in changes['new_orphans'][:10]:  # Max 10
                lines.append(f"  - {url}")
            if len(changes['new_orphans']) > 10:
                lines.append(f"  ... and {len(changes['new_orphans']) - 10} more")
            lines.append("")
        
        if changes['fixed_orphans']:
            lines.append(f"Fixed Orphan Pages ({len(changes['fixed_orphans'])}):")
            for url in changes['fixed_orphans'][:10]:
                lines.append(f"  - {url}")
            if len(changes['fixed_orphans']) > 10:
                lines.append(f"  ... and {len(changes['fixed_orphans']) - 10} more")
            lines.append("")
        
        lines.append("Please review and take appropriate action.")
        lines.append("")
        lines.append("---")
        lines.append("Automated SEO Monitoring System")
        
        return "\n".join(lines)


def main():
    """Main execution"""
    print("🚀 Orphan Page Monitoring System")
    print("ℹ️  This tool is designed to be called by scheduled tasks (cron, etc.)")
    print("Run: python3 orphan_page_detector.py to perform a crawl first")


if __name__ == "__main__":
    main()
