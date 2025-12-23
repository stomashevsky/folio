import json
import re

en_path = '/Users/sergey/github/folio/src/locales/en/articles.json'
ja_path = '/Users/sergey/github/folio/src/locales/ja/articles.json'

with open(en_path, 'r') as f:
    en_data = json.load(f)

with open(ja_path, 'r') as f:
    ja_data = json.load(f)

def contains_japanese(text):
    # Check for Hiragana, Katakana, or Kanji
    return bool(re.search(r'[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]', str(text)))

untranslated = []
for key in en_data:
    if key not in ja_data:
        untranslated.append(key)
        continue
    
    # Check title and first paragraph
    ja_article = ja_data[key]
    title = ja_article.get('title', '')
    p1 = ja_article.get('p1', '')
    
    # If it has content but no Japanese, it's probably untranslated
    if (title and not contains_japanese(title)) or (p1 and not contains_japanese(p1)):
        untranslated.append(key)
    # Special case: digital-wallet-apps-for-every-need had h2_5, p10 etc but no p1
    elif not title and not p1:
        # Check ANY content
        has_japanese = False
        for val in ja_article.values():
            if contains_japanese(val):
                has_japanese = True
                break
        if not has_japanese:
            untranslated.append(key)

print("Articles requiring translation (Missing or in English):")
for u in untranslated:
    print(u)

