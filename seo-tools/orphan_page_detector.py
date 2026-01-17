#!/usr/bin/env python3
"""
Orphan Page Detection and SEO Optimization System
Comprehensive tool for identifying and fixing orphan pages
"""

import os
import re
import json
import csv
from typing import Dict, List, Set, Tuple
from pathlib import Path
from datetime import datetime
import xml.etree.ElementTree as ET
from urllib.parse import urlparse, urljoin
from collections import defaultdict

class OrphanPageDetector:
    """Main class for detecting orphan pages and analyzing internal linking structure"""
    
    def __init__(self, project_root: str, base_url: str = "https://www.homemassagekuta.com"):
        self.project_root = Path(project_root)
        self.base_url = base_url
        self.sitemap_path = self.project_root / "sitemap.xml"
        self.pages_dir = self.project_root / "src" / "pages"
        self.app_tsx = self.project_root / "App.tsx"
        
        # Data structures
        self.all_pages: Dict[str, dict] = {}  # URL -> page info
        self.internal_links: Dict[str, Set[str]] = defaultdict(set)  # page -> links to
        self.inlinks_count: Dict[str, int] = defaultdict(int)  # page -> count of links from others
        self.orphan_pages: List[dict] = []
        self.sitemap_urls: Set[str] = set()
        
    def crawl_site(self) -> Dict[str, dict]:
        """Crawl entire website structure"""
        print("🔍 Starting site crawl...")
        
        # Step 1: Extract URLs from sitemap.xml
        self._extract_sitemap_urls()
        
        # Step 2: Extract routes from App.tsx
        self._extract_routes_from_app()
        
        # Step 3: Scan all page files for links
        self._scan_page_files_for_links()
        
        # Step 4: Calculate inlinks count
        self._calculate_inlinks()
        
        print(f"✅ Crawl complete. Found {len(self.all_pages)} pages")
        return self.all_pages
    
    def _extract_sitemap_urls(self):
        """Extract all URLs from sitemap.xml"""
        print("📄 Extracting URLs from sitemap.xml...")
        
        if not self.sitemap_path.exists():
            print("⚠️  Warning: sitemap.xml not found")
            return
        
        try:
            tree = ET.parse(self.sitemap_path)
            root = tree.getroot()
            
            # Handle XML namespace
            ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
            
            for url_element in root.findall('sm:url', ns):
                loc = url_element.find('sm:loc', ns)
                if loc is not None and loc.text:
                    # Extract path from full URL
                    parsed = urlparse(loc.text)
                    path = parsed.path or '/'
                    self.sitemap_urls.add(path)
                    
                    if path not in self.all_pages:
                        self.all_pages[path] = {
                            'url': path,
                            'full_url': loc.text,
                            'in_sitemap': True,
                            'has_route': False,
                            'file_path': None,
                            'links_to': set(),
                            'inlinks': 0
                        }
            
            print(f"  Found {len(self.sitemap_urls)} URLs in sitemap")
        except Exception as e:
            print(f"⚠️  Error parsing sitemap: {e}")
    
    def _extract_routes_from_app(self):
        """Extract all routes from App.tsx"""
        print("🗺️  Extracting routes from App.tsx...")
        
        if not self.app_tsx.exists():
            print("⚠️  Warning: App.tsx not found")
            return
        
        content = self.app_tsx.read_text()
        
        # Extract Route definitions: <Route path="/path" element={<Component />} />
        route_pattern = r'<Route\s+path="([^"]+)"'
        routes = re.findall(route_pattern, content)
        
        for route in routes:
            if route not in self.all_pages:
                self.all_pages[route] = {
                    'url': route,
                    'full_url': self.base_url + route,
                    'in_sitemap': route in self.sitemap_urls,
                    'has_route': True,
                    'file_path': None,
                    'links_to': set(),
                    'inlinks': 0
                }
            else:
                self.all_pages[route]['has_route'] = True
        
        print(f"  Found {len(routes)} routes in App.tsx")
    
    def _scan_page_files_for_links(self):
        """Scan all page files to find internal links"""
        print("🔗 Scanning page files for internal links...")
        
        if not self.pages_dir.exists():
            print("⚠️  Warning: pages directory not found")
            return
        
        page_files = list(self.pages_dir.glob("*.tsx"))
        
        for page_file in page_files:
            self._extract_links_from_file(page_file)
        
        print(f"  Scanned {len(page_files)} page files")
    
    def _extract_links_from_file(self, file_path: Path):
        """Extract internal links from a single file"""
        try:
            content = file_path.read_text()
            
            # Pattern for Link components: <Link to="/path">
            link_pattern = r'<Link\s+to="([^"]+)"'
            links = re.findall(link_pattern, content)
            
            # Pattern for navigate calls: navigate("/path")
            navigate_pattern = r'navigate\(["\']([^"\']+)["\']\)'
            nav_links = re.findall(navigate_pattern, content)
            
            # Pattern for href attributes: href="/path"
            href_pattern = r'href="(/[^"]*)"'
            href_links = re.findall(href_pattern, content)
            
            all_links = links + nav_links + href_links
            
            # Store the links (we'll associate them with pages later)
            for link in all_links:
                # Clean the link
                if link and link.startswith('/'):
                    # Store for later processing
                    self.internal_links[str(file_path)].add(link)
        
        except Exception as e:
            print(f"⚠️  Error reading {file_path}: {e}")
    
    def _calculate_inlinks(self):
        """Calculate inlinks count for each page"""
        print("📊 Calculating inlinks count...")
        
        # For each page file, find which page it represents
        for file_path_str, links in self.internal_links.items():
            for link in links:
                if link in self.all_pages:
                    self.all_pages[link]['inlinks'] += 1
        
        # Also check for links in common components (Navigation, Footer, etc.)
        self._scan_common_components()
    
    def _scan_common_components(self):
        """Scan common components like Navigation and Footer for links"""
        components_dir = self.project_root / "src" / "components"
        
        if not components_dir.exists():
            components_dir = self.project_root / "components"
        
        if components_dir.exists():
            # Scan Navigation components
            nav_files = list(components_dir.glob("**/Nav*.tsx")) + \
                       list(components_dir.glob("**/nav*.tsx")) + \
                       list(components_dir.glob("**/Footer*.tsx")) + \
                       list(components_dir.glob("**/footer*.tsx"))
            
            for nav_file in nav_files:
                self._extract_links_from_common_component(nav_file)
    
    def _extract_links_from_common_component(self, file_path: Path):
        """Extract links from navigation/footer components and add to all pages"""
        try:
            content = file_path.read_text()
            
            # Extract all internal links
            link_pattern = r'<Link\s+to="([^"]+)"'
            links = re.findall(link_pattern, content)
            
            href_pattern = r'href="(/[^"]*)"'
            href_links = re.findall(href_pattern, content)
            
            all_links = links + href_links
            
            # These links appear on ALL pages, so add inlinks to each
            for link in all_links:
                if link and link.startswith('/') and link in self.all_pages:
                    # Navigation links count as inlinks from every page
                    self.all_pages[link]['inlinks'] += 10  # Multiplier for nav presence
        
        except Exception as e:
            print(f"⚠️  Error reading {file_path}: {e}")
    
    def identify_orphan_pages(self) -> List[dict]:
        """Identify all orphan pages (0 internal links)"""
        print("\n🔍 Identifying orphan pages...")
        
        self.orphan_pages = []
        
        for url, page_info in self.all_pages.items():
            if page_info['inlinks'] == 0:
                orphan = {
                    'url': url,
                    'full_url': page_info['full_url'],
                    'in_sitemap': page_info['in_sitemap'],
                    'has_route': page_info['has_route'],
                    'classification': self._classify_orphan(page_info),
                    'recommended_action': '',
                    'priority': 'Unknown',
                    'traffic_estimate': 0,
                    'backlinks_estimate': 0
                }
                
                # Determine recommended action based on classification
                orphan['recommended_action'] = self._determine_action(orphan)
                orphan['priority'] = self._determine_priority(orphan)
                
                self.orphan_pages.append(orphan)
        
        print(f"🚨 Found {len(self.orphan_pages)} orphan pages")
        return self.orphan_pages
    
    def _classify_orphan(self, page_info: dict) -> str:
        """Classify orphan page type"""
        url = page_info['url']
        
        if '/services/' in url:
            return 'Service Page'
        elif '/areas/' in url:
            return 'Area/Location Page'
        elif url in ['/', '/about', '/contact', '/faq']:
            return 'Core Page'
        elif '/blog/' in url or '/article/' in url:
            return 'Blog/Content Page'
        else:
            return 'Other'
    
    def _determine_action(self, orphan: dict) -> str:
        """Determine recommended action for orphan page"""
        
        # Core pages should always have links
        if orphan['classification'] == 'Core Page':
            return 'ADD INTERNAL LINKS (Critical)'
        
        # Service and Area pages are valuable
        elif orphan['classification'] in ['Service Page', 'Area/Location Page']:
            return 'ADD INTERNAL LINKS (High Priority)'
        
        # Content pages - depends on quality
        elif orphan['classification'] == 'Blog/Content Page':
            return 'ADD INTERNAL LINKS or MERGE'
        
        # Other pages - evaluate case by case
        else:
            return 'EVALUATE: Add Links or Delete'
    
    def _determine_priority(self, orphan: dict) -> str:
        """Determine priority level for fixing"""
        
        if orphan['classification'] == 'Core Page':
            return 'CRITICAL'
        elif orphan['classification'] in ['Service Page', 'Area/Location Page']:
            return 'HIGH'
        elif orphan['classification'] == 'Blog/Content Page':
            return 'MEDIUM'
        else:
            return 'LOW'
    
    def generate_link_suggestions(self, orphan_url: str, num_suggestions: int = 5) -> List[dict]:
        """Generate internal link suggestions for an orphan page"""
        suggestions = []
        
        # Extract keywords from URL
        keywords = self._extract_keywords_from_url(orphan_url)
        
        # Find relevant pages to link FROM
        for url, page_info in self.all_pages.items():
            if url == orphan_url:
                continue
            
            # Calculate relevance score
            relevance = self._calculate_relevance(keywords, url)
            
            if relevance > 0:
                suggestions.append({
                    'from_page': url,
                    'to_page': orphan_url,
                    'relevance_score': relevance,
                    'anchor_text_suggestions': self._generate_anchor_texts(orphan_url)
                })
        
        # Sort by relevance and return top suggestions
        suggestions.sort(key=lambda x: x['relevance_score'], reverse=True)
        return suggestions[:num_suggestions]
    
    def _extract_keywords_from_url(self, url: str) -> List[str]:
        """Extract keywords from URL"""
        # Remove leading/trailing slashes and split
        path = url.strip('/')
        parts = path.split('/')
        
        keywords = []
        for part in parts:
            # Split on hyphens and underscores
            words = re.split(r'[-_]', part)
            keywords.extend(words)
        
        return keywords
    
    def _calculate_relevance(self, keywords: List[str], target_url: str) -> float:
        """Calculate relevance score between keywords and target URL"""
        target_keywords = self._extract_keywords_from_url(target_url)
        
        # Count matching keywords
        matches = sum(1 for kw in keywords if kw.lower() in [tk.lower() for tk in target_keywords])
        
        return matches / max(len(keywords), 1)
    
    def _generate_anchor_texts(self, url: str) -> List[str]:
        """Generate anchor text suggestions for a URL"""
        # Extract keywords and create natural anchor texts
        keywords = self._extract_keywords_from_url(url)
        
        anchor_texts = []
        
        # Join with spaces
        natural_text = ' '.join(keywords)
        anchor_texts.append(natural_text)
        
        # Add variations
        if 'massage' in keywords:
            anchor_texts.append(f"{' '.join([k for k in keywords if k != 'massage'])} massage services")
        
        if 'area' in keywords or 'areas' in keywords:
            location = [k for k in keywords if k not in ['area', 'areas']]
            if location:
                anchor_texts.append(f"massage in {' '.join(location)}")
        
        return anchor_texts[:3]
    
    def export_to_csv(self, output_path: str):
        """Export orphan pages analysis to CSV"""
        print(f"\n📊 Exporting results to {output_path}...")
        
        with open(output_path, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=[
                'URL', 'Full URL', 'Classification', 'Recommended Action', 'Priority',
                'In Sitemap', 'Has Route', 'Current Inlinks', 'Traffic Estimate', 
                'Backlinks Estimate', 'Notes'
            ])
            
            writer.writeheader()
            
            for orphan in self.orphan_pages:
                writer.writerow({
                    'URL': orphan['url'],
                    'Full URL': orphan['full_url'],
                    'Classification': orphan['classification'],
                    'Recommended Action': orphan['recommended_action'],
                    'Priority': orphan['priority'],
                    'In Sitemap': 'Yes' if orphan['in_sitemap'] else 'No',
                    'Has Route': 'Yes' if orphan['has_route'] else 'No',
                    'Current Inlinks': 0,
                    'Traffic Estimate': orphan['traffic_estimate'],
                    'Backlinks Estimate': orphan['backlinks_estimate'],
                    'Notes': ''
                })
        
        print("✅ Export complete")
    
    def export_all_pages_csv(self, output_path: str):
        """Export all pages with link counts to CSV"""
        print(f"\n📊 Exporting all pages to {output_path}...")
        
        with open(output_path, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=[
                'URL', 'Full URL', 'Internal Links Count', 'In Sitemap', 'Has Route',
                'Status', 'Last Updated', 'Priority'
            ])
            
            writer.writeheader()
            
            # Sort by inlinks count (ascending) to show orphans first
            sorted_pages = sorted(self.all_pages.items(), key=lambda x: x[1]['inlinks'])
            
            for url, page_info in sorted_pages:
                status = 'ORPHAN' if page_info['inlinks'] == 0 else 'Active'
                
                writer.writerow({
                    'URL': url,
                    'Full URL': page_info['full_url'],
                    'Internal Links Count': page_info['inlinks'],
                    'In Sitemap': 'Yes' if page_info['in_sitemap'] else 'No',
                    'Has Route': 'Yes' if page_info['has_route'] else 'No',
                    'Status': status,
                    'Last Updated': datetime.now().strftime('%Y-%m-%d'),
                    'Priority': self._determine_page_priority(page_info)
                })
        
        print("✅ Export complete")
    
    def _determine_page_priority(self, page_info: dict) -> str:
        """Determine priority for a page"""
        url = page_info['url']
        inlinks = page_info['inlinks']
        
        if url == '/':
            return 'CRITICAL'
        elif inlinks == 0:
            return 'CRITICAL - ORPHAN'
        elif inlinks < 3:
            return 'HIGH - Low Links'
        elif inlinks < 5:
            return 'MEDIUM'
        else:
            return 'NORMAL'
    
    def generate_report(self) -> str:
        """Generate comprehensive text report"""
        report = []
        report.append("=" * 80)
        report.append("ORPHAN PAGE DETECTION & SEO ANALYSIS REPORT")
        report.append("=" * 80)
        report.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append(f"Base URL: {self.base_url}")
        report.append("")
        
        report.append("SUMMARY")
        report.append("-" * 80)
        report.append(f"Total Pages Found: {len(self.all_pages)}")
        report.append(f"Pages in Sitemap: {len(self.sitemap_urls)}")
        report.append(f"Orphan Pages (0 inlinks): {len(self.orphan_pages)}")
        report.append("")
        
        # Orphan pages by classification
        report.append("ORPHAN PAGES BY CLASSIFICATION")
        report.append("-" * 80)
        
        classification_counts = defaultdict(int)
        for orphan in self.orphan_pages:
            classification_counts[orphan['classification']] += 1
        
        for classification, count in sorted(classification_counts.items()):
            report.append(f"  {classification}: {count}")
        report.append("")
        
        # Priority breakdown
        report.append("ORPHAN PAGES BY PRIORITY")
        report.append("-" * 80)
        
        priority_counts = defaultdict(int)
        for orphan in self.orphan_pages:
            priority_counts[orphan['priority']] += 1
        
        for priority in ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']:
            if priority in priority_counts:
                report.append(f"  {priority}: {priority_counts[priority]}")
        report.append("")
        
        # Detailed orphan list
        report.append("DETAILED ORPHAN PAGES LIST")
        report.append("-" * 80)
        
        for orphan in sorted(self.orphan_pages, key=lambda x: (x['priority'], x['url'])):
            report.append(f"\n[{orphan['priority']}] {orphan['url']}")
            report.append(f"  Classification: {orphan['classification']}")
            report.append(f"  Recommended Action: {orphan['recommended_action']}")
            report.append(f"  In Sitemap: {'Yes' if orphan['in_sitemap'] else 'No'}")
            report.append(f"  Has Route: {'Yes' if orphan['has_route'] else 'No'}")
        
        report.append("")
        report.append("=" * 80)
        report.append("END OF REPORT")
        report.append("=" * 80)
        
        return "\n".join(report)


def main():
    """Main execution function"""
    print("🚀 Orphan Page Detection System")
    print("=" * 80)
    
    # Determine project root
    current_dir = Path(__file__).parent.parent
    
    # Initialize detector
    detector = OrphanPageDetector(
        project_root=str(current_dir),
        base_url="https://www.homemassagekuta.com"
    )
    
    # Run crawl
    detector.crawl_site()
    
    # Identify orphans
    detector.identify_orphan_pages()
    
    # Generate report
    report = detector.generate_report()
    print("\n" + report)
    
    # Export results
    output_dir = current_dir / "seo-tools" / "reports"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    
    # Export orphan pages
    orphan_csv = output_dir / f"orphan_pages_{timestamp}.csv"
    detector.export_to_csv(str(orphan_csv))
    
    # Export all pages
    all_pages_csv = output_dir / f"all_pages_tracking_{timestamp}.csv"
    detector.export_all_pages_csv(str(all_pages_csv))
    
    # Export text report
    report_file = output_dir / f"orphan_report_{timestamp}.txt"
    report_file.write_text(report)
    print(f"\n📄 Report saved to: {report_file}")
    
    print("\n✅ Analysis complete!")
    print(f"📊 Results saved to: {output_dir}")


if __name__ == "__main__":
    main()
