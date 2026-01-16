#!/usr/bin/env python3
"""
Weekly Monitoring Runner
Scheduled task for continuous orphan page monitoring
"""

import sys
import os
import traceback
from pathlib import Path
from datetime import datetime

# Add to path
sys.path.insert(0, str(Path(__file__).parent))

from run_analysis import SEOToolsRunner


def run_weekly_monitoring():
    """Run weekly monitoring check"""
    print("\n" + "="*80)
    print(f"⏰ SCHEDULED MONITORING RUN - {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("="*80 + "\n")
    
    try:
        # Determine project root
        project_root = str(Path(__file__).parent.parent)
        
        # Run analysis
        runner = SEOToolsRunner(project_root)
        results = runner.run_full_analysis()
        
        # Check if alerts should be sent
        changes = results.get('changes', {})
        
        if changes.get('alerts'):
            print("\n" + "="*80)
            print("🚨 ALERTS DETECTED")
            print("="*80)
            for alert in changes['alerts']:
                print(f"  {alert}")
            
            # Log alerts
            alert_log = Path(project_root) / "seo-tools" / "monitoring" / "alerts.log"
            alert_log.parent.mkdir(parents=True, exist_ok=True)
            
            with open(alert_log, 'a') as f:
                f.write(f"\n{'='*60}\n")
                f.write(f"Scheduled Run: {datetime.now().isoformat()}\n")
                for alert in changes['alerts']:
                    f.write(f"{alert}\n")
        
        print("\n✅ Weekly monitoring complete")
        return 0
        
    except Exception as e:
        print(f"\n❌ Error during monitoring: {e}")
        traceback.print_exc()
        return 1


if __name__ == "__main__":
    sys.exit(run_weekly_monitoring())
