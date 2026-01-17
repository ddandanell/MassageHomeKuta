#!/usr/bin/env python3
"""
Automated Fix Generator
Generate code for fixing orphan pages through various methods
"""

import json
from typing import List, Dict
from pathlib import Path
from datetime import datetime


class FixGenerator:
    """Generate automated fixes for orphan pages"""
    
    def __init__(self, project_root: str, base_url: str):
        self.project_root = Path(project_root)
        self.base_url = base_url
        self.fixes = []
    
    def generate_all_fixes(self, orphan_pages: List[dict], pages_data: Dict) -> Dict:
        """Generate fixes for all orphan pages"""
        print("\n🔧 Generating automated fixes...")
        
        fixes = {
            'internal_links': [],
            'redirects': [],
            'noindex': [],
            'delete': []
        }
        
        for orphan in orphan_pages:
            fix_type = self._determine_fix_type(orphan)
            
            if fix_type == 'add_links':
                fixes['internal_links'].append(
                    self._generate_link_fix(orphan, pages_data)
                )
            elif fix_type == 'redirect':
                fixes['redirects'].append(
                    self._generate_redirect_fix(orphan, pages_data)
                )
            elif fix_type == 'noindex':
                fixes['noindex'].append(
                    self._generate_noindex_fix(orphan)
                )
            elif fix_type == 'delete':
                fixes['delete'].append(
                    self._generate_delete_fix(orphan)
                )
        
        print(f"✅ Generated fixes:")
        print(f"   Internal Links: {len(fixes['internal_links'])}")
        print(f"   Redirects: {len(fixes['redirects'])}")
        print(f"   Noindex: {len(fixes['noindex'])}")
        print(f"   Delete: {len(fixes['delete'])}")
        
        return fixes
    
    def _determine_fix_type(self, orphan: dict) -> str:
        """Determine which fix method to apply"""
        classification = orphan.get('classification', 'Other')
        priority = orphan.get('priority', 'LOW')
        
        # High-value pages should get links
        if priority in ['CRITICAL', 'HIGH']:
            return 'add_links'
        
        # Service and area pages should get links
        if classification in ['Service Page', 'Area/Location Page']:
            return 'add_links'
        
        # Low-value pages might be redirected
        if classification == 'Other' and priority == 'LOW':
            return 'redirect'
        
        # Default to adding links
        return 'add_links'
    
    def _generate_link_fix(self, orphan: dict, pages_data: Dict) -> Dict:
        """Generate internal linking fix"""
        return {
            'orphan_url': orphan['url'],
            'method': 'internal_links',
            'priority': orphan['priority'],
            'implementation': self._create_link_implementation_code(orphan, pages_data),
            'steps': [
                f"1. Identify 3-5 relevant pages to link FROM",
                f"2. Add contextual links using descriptive anchor text",
                f"3. Update sitemap.xml if needed",
                f"4. Verify links are working"
            ]
        }
    
    def _create_link_implementation_code(self, orphan: dict, pages_data: Dict) -> str:
        """Create code for adding internal links"""
        url = orphan['url']
        
        code = f"""
// Fix for Orphan Page: {url}
// Priority: {orphan['priority']}

// Step 1: Add to Navigation/Menu (if appropriate)
// In Navigation component, add:
<Link to="{url}">
  {{/* Descriptive Link Text */}}
</Link>

// Step 2: Add Links from Related Pages
// Example pages to update:
"""
        
        # Find related pages
        related_pages = self._find_related_pages(url, pages_data)
        for i, page in enumerate(related_pages[:3], 1):
            code += f"""
// {i}. Update {page}:
//    Add in relevant content section:
<Link to="{url}" className="text-primary hover:underline">
  {{/* contextual anchor text */}}
</Link>
"""
        
        code += f"""
// Step 3: Update sitemap.xml
// Ensure this entry exists:
<url>
  <loc>{self.base_url}{url}</loc>
  <lastmod>{datetime.now().strftime('%Y-%m-%d')}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>

// Step 4: Verify Implementation
// Run: python3 seo-tools/orphan_page_detector.py
// Confirm {url} no longer appears as orphan
"""
        
        return code
    
    def _find_related_pages(self, orphan_url: str, pages_data: Dict, top_n: int = 5) -> List[str]:
        """Find related pages for linking"""
        # Extract keywords from orphan URL
        keywords = set(orphan_url.lower().split('/'))
        keywords.discard('')
        
        related = []
        
        for url, info in pages_data.items():
            if url == orphan_url:
                continue
            
            # Calculate relevance
            url_keywords = set(url.lower().split('/'))
            url_keywords.discard('')
            
            overlap = len(keywords.intersection(url_keywords))
            if overlap > 0:
                related.append((url, overlap))
        
        # Sort by relevance
        related.sort(key=lambda x: x[1], reverse=True)
        return [url for url, _ in related[:top_n]]
    
    def _generate_redirect_fix(self, orphan: dict, pages_data: Dict) -> Dict:
        """Generate 301 redirect fix"""
        target = self._find_best_redirect_target(orphan, pages_data)
        
        return {
            'orphan_url': orphan['url'],
            'method': 'redirect',
            'target_url': target,
            'implementation': self._create_redirect_code(orphan['url'], target),
            'steps': [
                f"1. Identify best redirect target: {target}",
                f"2. Implement 301 redirect",
                f"3. Remove from sitemap.xml",
                f"4. Test redirect is working",
                f"5. Monitor in Google Search Console"
            ]
        }
    
    def _find_best_redirect_target(self, orphan: dict, pages_data: Dict) -> str:
        """Find best page to redirect to"""
        url = orphan['url']
        
        # Find most similar page
        related = self._find_related_pages(url, pages_data, top_n=1)
        
        if related:
            return related[0]
        
        # Fallback to parent path
        if url.count('/') > 1:
            parent = '/'.join(url.rsplit('/', 1)[:-1])
            if parent:
                return parent
        
        # Last resort: homepage (but not ideal)
        return '/'
    
    def _create_redirect_code(self, from_url: str, to_url: str) -> str:
        """Create redirect implementation code"""
        code = f"""
// 301 Redirect: {from_url} -> {to_url}

// Option 1: Using React Router (App.tsx)
<Route path="{from_url}" element={{<Navigate to="{to_url}" replace />}} />

// Option 2: Using .htaccess (if Apache)
Redirect 301 {from_url} {to_url}

// Option 3: Using vercel.json
{{
  "redirects": [
    {{
      "source": "{from_url}",
      "destination": "{to_url}",
      "permanent": true
    }}
  ]
}}

// Don't forget to remove from sitemap.xml!
"""
        return code
    
    def _generate_noindex_fix(self, orphan: dict) -> Dict:
        """Generate noindex implementation"""
        return {
            'orphan_url': orphan['url'],
            'method': 'noindex',
            'implementation': self._create_noindex_code(orphan['url']),
            'steps': [
                f"1. Add noindex meta tag to page",
                f"2. Keep page accessible for users",
                f"3. Remove from sitemap.xml",
                f"4. Monitor in Google Search Console"
            ]
        }
    
    def _create_noindex_code(self, url: str) -> str:
        """Create noindex implementation code"""
        code = f"""
// Noindex for: {url}

// Add to page component:
<Helmet>
  <meta name="robots" content="noindex, follow" />
  <title>Page Title</title>
</Helmet>

// Remove from sitemap.xml

// Note: Page remains accessible to users but won't be indexed
"""
        return code
    
    def _generate_delete_fix(self, orphan: dict) -> Dict:
        """Generate safe deletion implementation"""
        return {
            'orphan_url': orphan['url'],
            'method': 'delete',
            'implementation': self._create_delete_code(orphan['url']),
            'steps': [
                f"1. Verify zero traffic and zero backlinks",
                f"2. Remove route from App.tsx",
                f"3. Delete page file",
                f"4. Remove from sitemap.xml",
                f"5. Return 404 status"
            ]
        }
    
    def _create_delete_code(self, url: str) -> str:
        """Create deletion implementation steps"""
        code = f"""
// Safe Deletion for: {url}

// VERIFY FIRST:
// - Zero traffic in last 90 days
// - Zero external backlinks
// - No valuable content to preserve

// Step 1: Remove route from App.tsx
// Delete line: <Route path="{url}" element={{...}} />

// Step 2: Delete page file (if exists)
// Find and delete: src/pages/[PageName].tsx

// Step 3: Remove from sitemap.xml
// Delete <url> entry for {url}

// Step 4: Document deletion
// Log in seo-tools/reports/deleted_pages.log

// Result: Returns 404 status code
"""
        return code
    
    def export_fixes_to_file(self, fixes: Dict, output_path: str):
        """Export all fixes to implementation guide"""
        print(f"\n📝 Exporting fixes to {output_path}...")
        
        content = []
        content.append("=" * 80)
        content.append("ORPHAN PAGE FIX IMPLEMENTATION GUIDE")
        content.append("=" * 80)
        content.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        content.append("")
        
        # Internal Links
        if fixes['internal_links']:
            content.append("\n" + "="*80)
            content.append(f"METHOD 1: ADD INTERNAL LINKS ({len(fixes['internal_links'])} pages)")
            content.append("="*80)
            
            for i, fix in enumerate(fixes['internal_links'], 1):
                content.append(f"\n--- Fix #{i}: {fix['orphan_url']} (Priority: {fix['priority']}) ---")
                content.append(fix['implementation'])
        
        # Redirects
        if fixes['redirects']:
            content.append("\n" + "="*80)
            content.append(f"METHOD 2: 301 REDIRECTS ({len(fixes['redirects'])} pages)")
            content.append("="*80)
            
            for i, fix in enumerate(fixes['redirects'], 1):
                content.append(f"\n--- Redirect #{i}: {fix['orphan_url']} -> {fix['target_url']} ---")
                content.append(fix['implementation'])
        
        # Noindex
        if fixes['noindex']:
            content.append("\n" + "="*80)
            content.append(f"METHOD 3: NOINDEX IMPLEMENTATION ({len(fixes['noindex'])} pages)")
            content.append("="*80)
            
            for i, fix in enumerate(fixes['noindex'], 1):
                content.append(f"\n--- Noindex #{i}: {fix['orphan_url']} ---")
                content.append(fix['implementation'])
        
        # Delete
        if fixes['delete']:
            content.append("\n" + "="*80)
            content.append(f"METHOD 4: SAFE DELETION ({len(fixes['delete'])} pages)")
            content.append("="*80)
            
            for i, fix in enumerate(fixes['delete'], 1):
                content.append(f"\n--- Delete #{i}: {fix['orphan_url']} ---")
                content.append(fix['implementation'])
        
        # Write to file
        with open(output_path, 'w') as f:
            f.write("\n".join(content))
        
        print("✅ Fix implementation guide created")


def main():
    """Main execution"""
    print("🚀 Automated Fix Generator")
    print("ℹ️  This tool is designed to be called by orphan_page_detector.py")


if __name__ == "__main__":
    main()
