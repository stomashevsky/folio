import json
import re

def get_keys(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    return set(data.keys())

def get_slugs_from_ts(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    slugs = re.findall(r"slug: '([^']+)'", content)
    return set(slugs)

en_keys = get_keys('/Users/sergey/github/folio/src/locales/en/articles.json')
blog_slugs = get_slugs_from_ts('/Users/sergey/github/folio/src/data/blogArticles.ts')

missing_articles = blog_slugs - en_keys

print(f"Total blog articles: {len(blog_slugs)}")
print(f"Total JSON keys: {len(en_keys)}")
print(f"Missing in JSON: {len(missing_articles)}")

print("\nMissing slugs:")
for slug in sorted(list(missing_articles)):
    print(slug)
