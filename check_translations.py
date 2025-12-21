import json
import os

files = [
    'articles.json',
    'blog.json',
    'common.json',
    'government.json',
    'home.json',
    'pages.json',
    'platform.json',
    'solutions.json',
    'wallet.json'
]

base_en = '/Users/sergey/github/folio/src/locales/en'
base_es = '/Users/sergey/github/folio/src/locales/es'

def get_keys_recursive(data, parent_key=''):
    keys = set()
    for k, v in data.items():
        curr_key = f"{parent_key}.{k}" if parent_key else k
        if isinstance(v, dict):
            keys.update(get_keys_recursive(v, curr_key))
        else:
            keys.add(curr_key)
    return keys

print("Missing translations check:")

for filename in files:
    en_path = os.path.join(base_en, filename)
    es_path = os.path.join(base_es, filename)
    
    if not os.path.exists(en_path):
        print(f"Skipping {filename} (EN invalid)")
        continue
    if not os.path.exists(es_path):
        print(f"Skipping {filename} (ES invalid)")
        continue

    try:
        with open(en_path, 'r') as f:
            en_data = json.load(f)
        with open(es_path, 'r') as f:
            es_data = json.load(f)
            
        en_keys = get_keys_recursive(en_data)
        es_keys = get_keys_recursive(es_data)
        
        missing = en_keys - es_keys
        if missing:
            print(f"\n[{filename}] Missing {len(missing)} keys:")
            for k in sorted(list(missing))[:10]:
                print(f"  - {k}")
            if len(missing) > 10:
                print(f"  ... and {len(missing) - 10} more")
        else:
            print(f"\n[{filename}] OK")
            
        # Check for values that might be identical (potential untranslated copies)
        # This is a heuristic
        untranslated_count = 0
        for k in en_keys.intersection(es_keys):
            # Navigate to value
            keys = k.split('.')
            en_val = en_data
            es_val = es_data
            for key in keys:
                en_val = en_val[key]
                es_val = es_val[key]
            
            if isinstance(en_val, str) and en_val == es_val and len(en_val) > 3:
                 # Ignore short strings or common words typically same
                 # But list them if they look like sentences
                 if ' ' in en_val:
                     untranslated_count += 1
        
        if untranslated_count > 0:
            print(f"[{filename}] Warning: {untranslated_count} identical values (potentially untranslated)")

    except Exception as e:
        print(f"Error processing {filename}: {e}")
