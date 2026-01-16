#!/bin/bash
# Example: Complete SEO Workflow
# This demonstrates a typical usage scenario

echo "=========================================="
echo "SEO TOOLS - COMPLETE WORKFLOW EXAMPLE"
echo "=========================================="

# Step 1: Initial Analysis
echo ""
echo "[1/5] Running initial orphan page analysis..."
python3 seo-tools/run_analysis.py

# Step 2: Review Results
echo ""
echo "[2/5] Generated reports available in seo-tools/reports/"
echo "Key files to review:"
echo "  - executive_summary_*.txt (overview)"
echo "  - orphan_pages_*.csv (full list)"
echo "  - fix_implementation_guide_*.txt (solutions)"
echo "  - link_suggestions_*.csv (linking opportunities)"

# Step 3: Example - Validate a new page before publishing
echo ""
echo "[3/5] Example: Validating a new page..."
echo "Command: python3 seo-tools/content_validator.py src/pages/NewService.tsx /services/new-service"

# Step 4: Example - Implement fixes
echo ""
echo "[4/5] Example: Implementing fixes..."
echo "1. Add internal links to main /services page"
echo "2. Update each service page to link back"
echo "3. Add to sitemap.xml"
echo "4. Verify routes in App.tsx"

# Step 5: Verify fixes
echo ""
echo "[5/5] Re-running analysis to verify fixes..."
echo "Command: python3 seo-tools/run_analysis.py"
echo "Expected: Reduced orphan count"

echo ""
echo "=========================================="
echo "WORKFLOW COMPLETE"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Review executive_summary.txt"
echo "2. Prioritize HIGH and CRITICAL orphans"
echo "3. Implement suggested internal links"
echo "4. Update sitemap.xml"
echo "5. Re-run analysis to confirm"
echo "6. Set up weekly monitoring (cron job)"
echo ""
echo "For help: See seo-tools/README.md"
