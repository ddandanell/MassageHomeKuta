#!/usr/bin/env python3
"""
Content Creation Validation System
Pre-publish checks to prevent orphan pages
"""

import re
import sys
from pathlib import Path
from typing import List, Tuple, Dict
import xml.etree.ElementTree as ET


class ContentValidator:
    """Validate content before publishing to prevent orphans"""
    
    def __init__(self, project_root: str):
        self.project_root = Path(project_root)
        self.sitemap_path = self.project_root / "sitemap.xml"
        self.app_tsx = self.project_root / "App.tsx"
        self.validation_rules = {
            'min_internal_links': 2,
            'require_sitemap_entry': True,
            'require_route_definition': True,
            'require_navigation_link': False  # Optional but recommended
        }
    
    def validate_new_page(self, page_path: str, page_url: str) -> Tuple[bool, List[str]]:
        """Validate a new page before publishing"""
        print(f"\n🔍 Validating new page: {page_url}")
        
        issues = []
        warnings = []
        
        # Check 1: Internal links count
        link_count = self._count_internal_links(page_path)
        print(f"   Internal links: {link_count}")
        
        if link_count < self.validation_rules['min_internal_links']:
            issues.append(
                f"❌ FAIL: Page has only {link_count} internal links. "
                f"Minimum required: {self.validation_rules['min_internal_links']}"
            )
        else:
            print(f"   ✅ Internal links OK")
        
        # Check 2: Sitemap entry
        in_sitemap = self._check_sitemap_entry(page_url)
        print(f"   In sitemap: {in_sitemap}")
        
        if not in_sitemap and self.validation_rules['require_sitemap_entry']:
            issues.append(f"❌ FAIL: Page not found in sitemap.xml")
        elif in_sitemap:
            print(f"   ✅ Sitemap entry OK")
        
        # Check 3: Route definition
        has_route = self._check_route_definition(page_url)
        print(f"   Has route: {has_route}")
        
        if not has_route and self.validation_rules['require_route_definition']:
            issues.append(f"❌ FAIL: No route defined in App.tsx")
        elif has_route:
            print(f"   ✅ Route definition OK")
        
        # Check 4: Links TO this page from other pages
        inlinks = self._check_inlinks(page_url)
        print(f"   Inlinks from other pages: {inlinks}")
        
        if inlinks == 0:
            warnings.append(
                f"⚠️  WARNING: No other pages link to this page yet. "
                f"Add links from relevant pages before publishing."
            )
        else:
            print(f"   ✅ Has {inlinks} inlinks")
        
        # Check 5: SEO metadata
        has_title, has_description = self._check_seo_metadata(page_path)
        
        if not has_title:
            warnings.append(f"⚠️  WARNING: No SEO title tag found")
        if not has_description:
            warnings.append(f"⚠️  WARNING: No SEO meta description found")
        
        # Summary
        is_valid = len(issues) == 0
        
        print(f"\n{'✅ VALIDATION PASSED' if is_valid else '❌ VALIDATION FAILED'}")
        
        if issues:
            print("\nIssues to fix:")
            for issue in issues:
                print(f"  {issue}")
        
        if warnings:
            print("\nWarnings:")
            for warning in warnings:
                print(f"  {warning}")
        
        return is_valid, issues + warnings
    
    def _count_internal_links(self, page_path: str) -> int:
        """Count internal links in a page file"""
        try:
            file_path = Path(page_path)
            if not file_path.exists():
                return 0
            
            content = file_path.read_text()
            
            # Count different types of internal links
            link_count = 0
            
            # <Link to="/path">
            link_count += len(re.findall(r'<Link\s+to="(/[^"]*)"', content))
            
            # navigate("/path")
            link_count += len(re.findall(r'navigate\(["\'](/[^"\']*)["\']', content))
            
            # href="/path"
            link_count += len(re.findall(r'href="(/[^"]*)"', content))
            
            return link_count
        except Exception as e:
            print(f"⚠️  Error counting links: {e}")
            return 0
    
    def _check_sitemap_entry(self, page_url: str) -> bool:
        """Check if page is in sitemap.xml"""
        if not self.sitemap_path.exists():
            return False
        
        try:
            tree = ET.parse(self.sitemap_path)
            root = tree.getroot()
            
            ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
            
            for url_element in root.findall('sm:url', ns):
                loc = url_element.find('sm:loc', ns)
                if loc is not None and page_url in loc.text:
                    return True
            
            return False
        except Exception as e:
            print(f"⚠️  Error checking sitemap: {e}")
            return False
    
    def _check_route_definition(self, page_url: str) -> bool:
        """Check if route is defined in App.tsx"""
        if not self.app_tsx.exists():
            return False
        
        try:
            content = self.app_tsx.read_text()
            
            # Look for route definition
            pattern = f'<Route\\s+path="{re.escape(page_url)}"'
            return bool(re.search(pattern, content))
        except Exception as e:
            print(f"⚠️  Error checking route: {e}")
            return False
    
    def _check_inlinks(self, page_url: str) -> int:
        """Check how many other pages link to this page"""
        count = 0
        
        pages_dir = self.project_root / "src" / "pages"
        if not pages_dir.exists():
            return 0
        
        try:
            for page_file in pages_dir.glob("*.tsx"):
                content = page_file.read_text()
                
                # Count occurrences of this URL in links
                if f'to="{page_url}"' in content:
                    count += 1
                if f'href="{page_url}"' in content:
                    count += 1
                if f"navigate('{page_url}')" in content or f'navigate("{page_url}")' in content:
                    count += 1
        except Exception as e:
            print(f"⚠️  Error checking inlinks: {e}")
        
        return count
    
    def _check_seo_metadata(self, page_path: str) -> Tuple[bool, bool]:
        """Check for SEO metadata"""
        try:
            file_path = Path(page_path)
            if not file_path.exists():
                return False, False
            
            content = file_path.read_text()
            
            # Check for Helmet/title
            has_title = bool(re.search(r'<title>', content)) or \
                       bool(re.search(r'<Helmet>', content))
            
            # Check for description
            has_description = bool(re.search(r'name=["\']description["\']', content))
            
            return has_title, has_description
        except Exception as e:
            print(f"⚠️  Error checking SEO metadata: {e}")
            return False, False
    
    def generate_checklist(self, page_url: str) -> str:
        """Generate pre-publish checklist"""
        checklist = f"""
PRE-PUBLISH CHECKLIST FOR: {page_url}
{'='*60}

Content Requirements:
[ ] Page content is complete and proofread
[ ] All images have alt text
[ ] Headings use proper hierarchy (H1, H2, H3)

SEO Requirements:
[ ] Unique page title (50-60 characters)
[ ] Meta description (150-160 characters)
[ ] Keywords naturally integrated in content
[ ] URL is descriptive and clean

Internal Linking (CRITICAL - Prevents Orphan Pages):
[ ] Minimum 2-3 internal links to other pages
[ ] Links use descriptive anchor text (not "click here")
[ ] Links are contextually relevant
[ ] Main navigation includes link to this page (if appropriate)

Technical Requirements:
[ ] Route defined in App.tsx
[ ] Entry added to sitemap.xml
[ ] Page responsive on mobile devices
[ ] No console errors
[ ] Loading performance is good

Validation:
[ ] Run: python3 seo-tools/content_validator.py {page_url}
[ ] All validation checks pass
[ ] At least 1 other page links to this page

Post-Publishing:
[ ] Verify page is accessible at {page_url}
[ ] Check Google Search Console for indexing
[ ] Monitor page in orphan detection reports

REMEMBER: A page with ZERO internal links is an ORPHAN PAGE!
Always add internal links BEFORE publishing.
"""
        return checklist
    
    def suggest_link_opportunities(self, page_url: str) -> List[str]:
        """Suggest pages that should link to this new page"""
        suggestions = []
        
        # Extract keywords from URL
        keywords = self._extract_keywords(page_url)
        
        print(f"\n🔗 Suggested pages to add links FROM:")
        print(f"   Keywords from URL: {', '.join(keywords)}")
        
        # Common linking opportunities
        if '/services/' in page_url:
            suggestions.append("Main /services page (service listing)")
            suggestions.append("Homepage (if featured service)")
            suggestions.append("Related service pages")
        
        if '/areas/' in page_url:
            suggestions.append("Main /areas page (location listing)")
            suggestions.append("Homepage (if featured location)")
            suggestions.append("Nearby area pages")
        
        # Keyword-based suggestions
        if 'massage' in keywords:
            suggestions.append("Other massage service pages")
            suggestions.append("Packages page (if part of package)")
        
        if any(location in keywords for location in ['kuta', 'seminyak', 'ubud', 'canggu']):
            suggestions.append("Area overview pages")
            suggestions.append("Location-specific service pages")
        
        for i, suggestion in enumerate(suggestions, 1):
            print(f"   {i}. {suggestion}")
        
        return suggestions
    
    def _extract_keywords(self, url: str) -> List[str]:
        """Extract keywords from URL"""
        path = url.strip('/')
        parts = path.split('/')
        keywords = []
        
        for part in parts:
            words = re.split(r'[-_]', part)
            keywords.extend([w.lower() for w in words if w])
        
        return keywords


def main():
    """Main execution"""
    print("🚀 Content Validation System")
    print("=" * 60)
    
    if len(sys.argv) < 2:
        print("Usage: python3 content_validator.py <page_file_path> <page_url>")
        print("Example: python3 content_validator.py src/pages/NewPage.tsx /new-page")
        sys.exit(1)
    
    page_file = sys.argv[1]
    page_url = sys.argv[2] if len(sys.argv) > 2 else "/test-page"
    
    current_dir = Path(__file__).parent.parent
    
    validator = ContentValidator(str(current_dir))
    
    # Run validation
    is_valid, messages = validator.validate_new_page(page_file, page_url)
    
    # Generate checklist
    print("\n" + "="*60)
    print(validator.generate_checklist(page_url))
    
    # Suggest link opportunities
    validator.suggest_link_opportunities(page_url)
    
    # Exit code
    sys.exit(0 if is_valid else 1)


if __name__ == "__main__":
    main()
