#!/usr/bin/env python3
import xml.etree.ElementTree as ET
import os
import re
from pathlib import Path
from datetime import datetime
from html.parser import HTMLParser
import urllib.request

class HTMLToMarkdown(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.text_parts = []
        self.in_pre = False
        self.in_strong = False
        self.in_em = False

    def handle_starttag(self, tag, attrs):
        if tag == 'p':
            self.text_parts.append('\n')
        elif tag == 'br':
            self.text_parts.append('\n')
        elif tag == 'h1':
            self.text_parts.append('\n# ')
        elif tag == 'h2':
            self.text_parts.append('\n## ')
        elif tag == 'h3':
            self.text_parts.append('\n### ')
        elif tag == 'strong' or tag == 'b':
            self.text_parts.append('**')
            self.in_strong = True
        elif tag == 'em' or tag == 'i':
            self.text_parts.append('*')
            self.in_em = True
        elif tag == 'li':
            self.text_parts.append('\n- ')
        elif tag == 'img':
            for attr, value in attrs:
                if attr == 'src':
                    self.text_parts.append(f'\n![image]({value})\n')
        elif tag == 'a':
            for attr, value in attrs:
                if attr == 'href':
                    self.text_parts.append('[')
                    break

    def handle_endtag(self, tag):
        if tag == 'p':
            self.text_parts.append('\n')
        elif tag == 'h1' or tag == 'h2' or tag == 'h3':
            self.text_parts.append('\n')
        elif tag == 'strong' or tag == 'b':
            self.text_parts.append('**')
        elif tag == 'em' or tag == 'i':
            self.text_parts.append('*')
        elif tag == 'a':
            self.text_parts.append('](link)')

    def handle_data(self, data):
        self.text_parts.append(data.strip())

    def get_markdown(self):
        return ''.join(self.text_parts)

def extract_text_from_html(html_content):
    """Simple HTML to text conversion"""
    # Remove script and style elements
    html_content = re.sub(r'<script[^>]*>.*?</script>', '', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<style[^>]*>.*?</style>', '', html_content, flags=re.DOTALL)

    # Remove HTML tags but keep content
    text = re.sub(r'<[^>]+>', '\n', html_content)

    # Clean up whitespace
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    return '\n\n'.join(lines)

def categorize_post(title, content, tags):
    """Categorize post as wedding, portrait, or branding"""
    title_lower = title.lower()
    content_lower = content.lower()

    wedding_keywords = ['wedding', 'engagement', 'bride', 'groom', 'ceremony', 'reception', 'venue', 'second shooter', 'elopement']
    portrait_keywords = ['portrait', 'family', 'headshot', 'session', 'mini session', 'mother', 'parent']
    branding_keywords = ['brand', 'business', 'product', 'commercial', 'business', 'corporate', 'lifestyle']

    wedding_score = sum(1 for kw in wedding_keywords if kw in title_lower or kw in content_lower[:500])
    portrait_score = sum(1 for kw in portrait_keywords if kw in title_lower or kw in content_lower[:500])
    branding_score = sum(1 for kw in branding_keywords if kw in title_lower or kw in content_lower[:500])

    scores = {'wedding': wedding_score, 'portrait': portrait_score, 'branding': branding_score}
    return max(scores, key=scores.get) if max(scores.values()) > 0 else 'wedding'

def slugify(text):
    """Convert title to URL-friendly slug"""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')

# Parse XML
xml_file = '/Users/petercohen/Downloads/Squarespace-Wordpress-Export-06-02-2026.xml'
tree = ET.parse(xml_file)
root = tree.getroot()

# Define namespaces
namespaces = {
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'dc': 'http://purl.org/dc/elements/1.1/',
    'wp': 'http://wordpress.org/export/1.2/'
}

# Extract posts
posts = []
for item in root.findall('.//item'):
    title_elem = item.find('title')
    pubdate_elem = item.find('pubDate')
    content_elem = item.find('content:encoded', namespaces)
    post_type = item.find('wp:post_type', namespaces)

    # Skip non-posts
    if post_type is not None and post_type.text != 'post':
        continue
    if title_elem is None or content_elem is None:
        continue

    title = title_elem.text or 'Untitled'
    content = content_elem.text or ''
    pubdate = pubdate_elem.text if pubdate_elem is not None else ''

    # Parse date
    try:
        date_obj = datetime.strptime(pubdate, '%a, %d %b %Y %H:%M:%S +0000')
        formatted_date = date_obj.strftime('%Y-%m-%d')
    except:
        formatted_date = '2025-01-01'

    # Extract text content
    text_content = extract_text_from_html(content)

    # Get category
    category = categorize_post(title, text_content, [])

    # Extract images from content
    image_urls = re.findall(r'src=["\']([^"\']+\.(?:jpg|jpeg|png|gif|webp))["\']', content, re.IGNORECASE)
    featured_image = image_urls[0] if image_urls else None

    posts.append({
        'title': title,
        'date': formatted_date,
        'content': text_content,
        'category': category,
        'featured_image': featured_image,
        'image_urls': image_urls,
        'slug': slugify(title)
    })

# Sort by date (newest first)
posts.sort(key=lambda x: x['date'], reverse=True)

# Select best 20 with balanced categories
wedding_posts = [p for p in posts if p['category'] == 'wedding'][:8]
portrait_posts = [p for p in posts if p['category'] == 'portrait'][:7]
branding_posts = [p for p in posts if p['category'] == 'branding'][:5]

selected_posts = wedding_posts + portrait_posts + branding_posts
selected_posts.sort(key=lambda x: x['date'], reverse=True)

print(f"Total posts found: {len(posts)}")
print(f"Selected {len(selected_posts)} posts:")
print(f"  - {len(wedding_posts)} wedding")
print(f"  - {len(portrait_posts)} portrait")
print(f"  - {len(branding_posts)} branding")

# Create directories
content_dir = Path('/Users/petercohen/Desktop/transcend-photography-site/content/posts')
images_dir = Path('/Users/petercohen/Desktop/transcend-photography-site/public/blog-images')
content_dir.mkdir(parents=True, exist_ok=True)
images_dir.mkdir(parents=True, exist_ok=True)

# Write markdown files
for post in selected_posts:
    # Prepare excerpt (first 150 chars)
    excerpt = post['content'][:150].replace('\n', ' ').strip() + '...'

    # Create markdown
    md_content = f"""---
title: "{post['title']}"
date: "{post['date']}"
category: "{post['category']}"
excerpt: "{excerpt}"
"""

    if post['featured_image']:
        # Try to download featured image
        try:
            img_filename = f"{post['slug']}-featured.jpg"
            img_path = images_dir / img_filename
            urllib.request.urlretrieve(post['featured_image'], img_path)
            md_content += f'featuredImage: "/blog-images/{img_filename}"\n'
        except:
            md_content += f'featuredImage: ""\n'
    else:
        md_content += f'featuredImage: ""\n'

    md_content += f'---\n\n{post["content"]}\n'

    # Write file
    file_path = content_dir / f'{post["slug"]}.md'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(md_content)

    print(f"✓ Created: {file_path.name}")

print(f"\n✓ All {len(selected_posts)} posts migrated to {content_dir}")
