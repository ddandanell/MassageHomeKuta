#!/usr/bin/env python3
"""
Internal Link Suggestion Generator
Generates contextual internal linking opportunities for pages
"""

import json
import csv
from typing import List, Dict
from pathlib import Path
from collections import defaultdict
import re


class LinkSuggestionGenerator:
    """Generate intelligent internal linking suggestions"""
    
    def __init__(self, pages_data: Dict[str, dict]):
        self.pages_data = pages_data
        self.suggestions = []
    
    def generate_suggestions_for_orphans(self, orphan_pages: List[dict]) -> List[dict]:
        """Generate link suggestions for all orphan pages"""
        print("\n🔗 Generating internal link suggestions...")
        
        for orphan in orphan_pages:
            suggestions = self._find_relevant_pages(orphan['url'])
            
            for suggestion in suggestions:
                self.suggestions.append({
                    'orphan_page': orphan['url'],
                    'link_from_page': suggestion['from_page'],
                    'relevance_score': suggestion['score'],
                    'anchor_texts': suggestion['anchors'],
                    'placement_strategy': suggestion['strategy']
                })
        
        print(f"✅ Generated {len(self.suggestions)} link suggestions")
        return self.suggestions
    
    def _find_relevant_pages(self, orphan_url: str, top_n: int = 5) -> List[dict]:
        """Find most relevant pages to link FROM"""
        candidates = []
        
        orphan_keywords = self._extract_keywords(orphan_url)
        
        for url, page_info in self.pages_data.items():
            if url == orphan_url:
                continue
            
            # Calculate relevance
            relevance = self._calculate_relevance(orphan_keywords, url)
            
            if relevance > 0:
                candidates.append({
                    'from_page': url,
                    'score': relevance,
                    'anchors': self._generate_anchor_texts(orphan_url, url),
                    'strategy': self._determine_placement_strategy(url, orphan_url)
                })
        
        # Sort by relevance and return top N
        candidates.sort(key=lambda x: x['score'], reverse=True)
        return candidates[:top_n]
    
    def _extract_keywords(self, url: str) -> List[str]:
        """Extract keywords from URL"""
        path = url.strip('/')
        parts = path.split('/')
        keywords = []
        
        for part in parts:
            words = re.split(r'[-_]', part)
            keywords.extend(words)
        
        return [k.lower() for k in keywords if k]
    
    def _calculate_relevance(self, keywords: List[str], target_url: str) -> float:
        """Calculate relevance score"""
        target_keywords = self._extract_keywords(target_url)
        
        # Keyword matching
        keyword_matches = sum(1 for kw in keywords if kw in target_keywords)
        
        # URL structure similarity
        url_depth = len(target_url.strip('/').split('/'))
        
        # Priority boost for main pages
        priority_boost = 1.5 if target_url in ['/', '/services', '/areas'] else 1.0
        
        score = (keyword_matches * 2.0 + (1.0 / url_depth)) * priority_boost
        
        return score
    
    def _generate_anchor_texts(self, target_url: str, from_url: str) -> List[str]:
        """Generate contextual anchor text suggestions"""
        keywords = self._extract_keywords(target_url)
        anchors = []
        
        # Natural phrase
        natural = ' '.join(keywords[:3])
        if natural:
            anchors.append(natural)
        
        # Service-specific
        if 'massage' in keywords:
            service_type = [k for k in keywords if k != 'massage'][:2]
            if service_type:
                anchors.append(f"{' '.join(service_type)} massage")
        
        # Location-specific
        if 'area' in keywords or 'areas' in keywords:
            location = [k for k in keywords if k not in ['area', 'areas']][:2]
            if location:
                anchors.append(f"massage in {' '.join(location)}")
                anchors.append(f"{' '.join(location)} massage services")
        
        # Call-to-action style
        if len(keywords) > 0:
            anchors.append(f"explore {' '.join(keywords[:2])}")
        
        return list(set(anchors))[:5]  # Remove duplicates, max 5
    
    def _determine_placement_strategy(self, from_url: str, to_url: str) -> str:
        """Determine optimal placement strategy for link"""
        
        if from_url == '/':
            return "Hero section or main navigation"
        elif from_url == '/services':
            return "Service cards or related services section"
        elif from_url == '/areas':
            return "Area listings or location cards"
        elif '/services/' in from_url:
            return "Related services section or 'You may also like'"
        elif '/areas/' in from_url:
            return "Available services section or 'Book in this area'"
        else:
            return "Content body or sidebar recommendations"
    
    def export_to_csv(self, output_path: str):
        """Export suggestions to CSV"""
        print(f"\n📊 Exporting suggestions to {output_path}...")
        
        with open(output_path, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=[
                'Orphan Page', 'Link From Page', 'Relevance Score',
                'Anchor Text 1', 'Anchor Text 2', 'Anchor Text 3',
                'Placement Strategy', 'Implementation Priority'
            ])
            
            writer.writeheader()
            
            for suggestion in self.suggestions:
                anchors = suggestion['anchor_texts']
                writer.writerow({
                    'Orphan Page': suggestion['orphan_page'],
                    'Link From Page': suggestion['link_from_page'],
                    'Relevance Score': f"{suggestion['relevance_score']:.2f}",
                    'Anchor Text 1': anchors[0] if len(anchors) > 0 else '',
                    'Anchor Text 2': anchors[1] if len(anchors) > 1 else '',
                    'Anchor Text 3': anchors[2] if len(anchors) > 2 else '',
                    'Placement Strategy': suggestion['placement_strategy'],
                    'Implementation Priority': self._priority_from_score(suggestion['relevance_score'])
                })
        
        print("✅ Export complete")
    
    def _priority_from_score(self, score: float) -> str:
        """Convert relevance score to priority"""
        if score >= 5.0:
            return 'HIGH'
        elif score >= 3.0:
            return 'MEDIUM'
        else:
            return 'LOW'


def main():
    """Main execution"""
    print("🚀 Link Suggestion Generator")
    
    # This would typically be called by the main orphan detector
    print("ℹ️  This tool is designed to be imported and used by orphan_page_detector.py")
    print("Run: python3 orphan_page_detector.py to generate suggestions")


if __name__ == "__main__":
    main()
