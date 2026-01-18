#!/usr/bin/env python3
"""
Master SEO Tools Runner
Comprehensive orphan page detection and optimization system
"""

import sys
import os
from pathlib import Path
from datetime import datetime

# Add seo-tools to path
sys.path.insert(0, str(Path(__file__).parent))

from orphan_page_detector import OrphanPageDetector
from link_suggestion_generator import LinkSuggestionGenerator
from fix_generator import FixGenerator
from monitoring_system import OrphanMonitor


class SEOToolsRunner:
    """Main orchestrator for all SEO tools"""
    
    def __init__(self, project_root: str = None):
        if project_root is None:
            project_root = str(Path(__file__).parent.parent)
        
        self.project_root = project_root
        self.base_url = "https://www.homemassagekuta.com"
        self.output_dir = Path(project_root) / "seo-tools" / "reports"
        self.output_dir.mkdir(parents=True, exist_ok=True)
        
        self.timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    
    def run_full_analysis(self):
        """Run complete SEO analysis"""
        print("="*80)
        print("🚀 SEO TOOLS: COMPLETE ORPHAN PAGE ANALYSIS")
        print("="*80)
        print(f"Project: {self.project_root}")
        print(f"Base URL: {self.base_url}")
        print(f"Timestamp: {self.timestamp}")
        print("="*80)
        
        # Step 1: Run orphan detection
        print("\n[STEP 1/5] Running Orphan Page Detection...")
        detector = OrphanPageDetector(self.project_root, self.base_url)
        detector.crawl_site()
        detector.identify_orphan_pages()
        
        # Generate report
        report = detector.generate_report()
        print("\n" + report)
        
        # Export orphan pages
        orphan_csv = self.output_dir / f"orphan_pages_{self.timestamp}.csv"
        detector.export_to_csv(str(orphan_csv))
        
        # Export all pages
        all_pages_csv = self.output_dir / f"all_pages_tracking_{self.timestamp}.csv"
        detector.export_all_pages_csv(str(all_pages_csv))
        
        # Save text report
        report_file = self.output_dir / f"orphan_report_{self.timestamp}.txt"
        report_file.write_text(report)
        
        # Step 2: Generate link suggestions
        print("\n[STEP 2/5] Generating Internal Link Suggestions...")
        link_gen = LinkSuggestionGenerator(detector.all_pages)
        suggestions = link_gen.generate_suggestions_for_orphans(detector.orphan_pages)
        
        # Export suggestions
        suggestions_csv = self.output_dir / f"link_suggestions_{self.timestamp}.csv"
        link_gen.export_to_csv(str(suggestions_csv))
        
        # Step 3: Generate automated fixes
        print("\n[STEP 3/5] Generating Automated Fixes...")
        fix_gen = FixGenerator(self.project_root, self.base_url)
        fixes = fix_gen.generate_all_fixes(detector.orphan_pages, detector.all_pages)
        
        # Export fix implementation guide
        fixes_file = self.output_dir / f"fix_implementation_guide_{self.timestamp}.txt"
        fix_gen.export_fixes_to_file(fixes, str(fixes_file))
        
        # Step 4: Run monitoring check
        print("\n[STEP 4/5] Running Monitoring Check...")
        monitor = OrphanMonitor(self.project_root)
        changes = monitor.run_check({
            'all_pages': detector.all_pages,
            'orphan_pages': detector.orphan_pages
        })
        
        # Export monitoring report
        monitoring_csv = self.output_dir / f"monitoring_history_{self.timestamp}.csv"
        monitor.generate_report(str(monitoring_csv))
        
        # Step 5: Generate summary
        print("\n[STEP 5/5] Generating Summary...")
        self._generate_summary(detector, len(suggestions), fixes, changes)
        
        print("\n" + "="*80)
        print("✅ ANALYSIS COMPLETE")
        print("="*80)
        print(f"\n📊 All reports saved to: {self.output_dir}")
        print(f"\n📄 Key Files:")
        print(f"   - Orphan Pages: {orphan_csv.name}")
        print(f"   - All Pages Tracking: {all_pages_csv.name}")
        print(f"   - Link Suggestions: {suggestions_csv.name}")
        print(f"   - Fix Implementation: {fixes_file.name}")
        print(f"   - Monitoring History: {monitoring_csv.name}")
        print(f"   - Text Report: {report_file.name}")
        
        print("\n📖 Next Steps:")
        print("   1. Review orphan_report.txt for overview")
        print("   2. Open fix_implementation_guide.txt for solutions")
        print("   3. Prioritize HIGH and CRITICAL orphan pages")
        print("   4. Implement suggested internal links")
        print("   5. Re-run analysis to verify fixes")
        
        return {
            'detector': detector,
            'suggestions': suggestions,
            'fixes': fixes,
            'changes': changes
        }
    
    def _generate_summary(self, detector, suggestion_count, fixes, changes):
        """Generate execution summary"""
        summary = []
        summary.append("\n" + "="*80)
        summary.append("EXECUTIVE SUMMARY")
        summary.append("="*80)
        
        # Statistics
        total_pages = len(detector.all_pages)
        orphan_count = len(detector.orphan_pages)
        orphan_percentage = (orphan_count / total_pages * 100) if total_pages > 0 else 0
        
        summary.append(f"\nSite Statistics:")
        summary.append(f"  Total Pages: {total_pages}")
        summary.append(f"  Orphan Pages: {orphan_count}")
        summary.append(f"  Orphan Percentage: {orphan_percentage:.1f}%")
        summary.append(f"  Pages in Sitemap: {len(detector.sitemap_urls)}")
        
        # Health assessment
        summary.append(f"\nSite Health:")
        if orphan_percentage == 0:
            summary.append(f"  ✅ EXCELLENT - No orphan pages!")
        elif orphan_percentage < 5:
            summary.append(f"  ✅ GOOD - Few orphan pages")
        elif orphan_percentage < 15:
            summary.append(f"  ⚠️  FAIR - Moderate orphan pages")
        else:
            summary.append(f"  🚨 NEEDS ATTENTION - Many orphan pages")
        
        # Fix distribution
        summary.append(f"\nRecommended Fixes:")
        summary.append(f"  Internal Links: {len(fixes['internal_links'])} pages")
        summary.append(f"  301 Redirects: {len(fixes['redirects'])} pages")
        summary.append(f"  Noindex: {len(fixes['noindex'])} pages")
        summary.append(f"  Safe Deletion: {len(fixes['delete'])} pages")
        
        # Priority breakdown
        priority_counts = {'CRITICAL': 0, 'HIGH': 0, 'MEDIUM': 0, 'LOW': 0}
        for orphan in detector.orphan_pages:
            priority = orphan.get('priority', 'LOW')
            if priority in priority_counts:
                priority_counts[priority] += 1
        
        summary.append(f"\nPriority Breakdown:")
        summary.append(f"  CRITICAL: {priority_counts['CRITICAL']} pages")
        summary.append(f"  HIGH: {priority_counts['HIGH']} pages")
        summary.append(f"  MEDIUM: {priority_counts['MEDIUM']} pages")
        summary.append(f"  LOW: {priority_counts['LOW']} pages")
        
        # Actionable recommendations
        summary.append(f"\nImmediate Actions Required:")
        if priority_counts['CRITICAL'] > 0:
            summary.append(f"  1. ❗ FIX {priority_counts['CRITICAL']} CRITICAL orphan pages")
        if priority_counts['HIGH'] > 0:
            summary.append(f"  2. 📌 FIX {priority_counts['HIGH']} HIGH priority orphan pages")
        if suggestion_count > 0:
            summary.append(f"  3. 🔗 Review {suggestion_count} link suggestions")
        
        summary.append(f"\nEstimated SEO Impact:")
        impact_score = self._calculate_impact_score(orphan_count, total_pages, priority_counts)
        summary.append(f"  Impact Score: {impact_score}/10")
        if impact_score >= 7:
            summary.append(f"  Expected Improvement: HIGH - Significant ranking potential")
        elif impact_score >= 4:
            summary.append(f"  Expected Improvement: MEDIUM - Noticeable SEO benefits")
        else:
            summary.append(f"  Expected Improvement: LOW - Minimal impact expected")
        
        summary.append("")
        
        summary_text = "\n".join(summary)
        print(summary_text)
        
        # Save summary
        summary_file = self.output_dir / f"executive_summary_{self.timestamp}.txt"
        summary_file.write_text(summary_text)
    
    def _calculate_impact_score(self, orphan_count, total_pages, priority_counts):
        """Calculate potential SEO impact score (0-10)"""
        if total_pages == 0:
            return 0
        
        # Base score from orphan percentage
        orphan_pct = orphan_count / total_pages
        base_score = min(10, orphan_pct * 50)  # Higher orphan % = higher impact when fixed
        
        # Weight by priority
        priority_weight = (
            priority_counts['CRITICAL'] * 3 +
            priority_counts['HIGH'] * 2 +
            priority_counts['MEDIUM'] * 1
        )
        
        # Scale to 0-10
        impact_score = min(10, base_score + (priority_weight / total_pages * 10))
        
        return round(impact_score, 1)


def main():
    """Main execution"""
    print("\n")
    print("="*80)
    print(" " * 20 + "SEO TOOLS v1.0.0")
    print(" " * 10 + "Orphan Page Detection & Optimization System")
    print("="*80)
    
    # Determine project root
    if len(sys.argv) > 1:
        project_root = sys.argv[1]
    else:
        project_root = str(Path(__file__).parent.parent)
    
    # Initialize and run
    runner = SEOToolsRunner(project_root)
    results = runner.run_full_analysis()
    
    print("\n🎉 All done! Review the reports and start implementing fixes.")
    print("📚 See seo-tools/README.md for detailed usage instructions.\n")


if __name__ == "__main__":
    main()
