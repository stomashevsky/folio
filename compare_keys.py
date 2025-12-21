import json

def load_json(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Error: File not found at {filepath}")
        return {}
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {filepath}: {e}")
        return {}

def compare_keys(en_data, es_data, path=""):
    diff = []
    
    # Check for keys in EN that are missing in ES
    for key in en_data:
        current_path = f"{path}.{key}" if path else key
        
        if key not in es_data:
            diff.append(f"Missing in ES: {current_path}")
        elif isinstance(en_data[key], dict) and isinstance(es_data[key], dict):
            diff.extend(compare_keys(en_data[key], es_data[key], current_path))
            
    # Check for keys in ES that are not in EN (extra keys)
    for key in es_data:
        current_path = f"{path}.{key}" if path else key
        if key not in en_data:
            diff.append(f"Extra in ES: {current_path}")

    return diff

def main():
    en_path = 'src/locales/en/articles.json'
    es_path = 'src/locales/es/articles.json'
    
    print(f"Comparing {en_path} and {es_path}...")
    
    en_json = load_json(en_path)
    es_json = load_json(es_path)
    
    if not en_json or not es_json:
        return

    differences = compare_keys(en_json, es_json)
    
    if differences:
        print("Differences found:")
        for diff in differences:
            print(diff)
    else:
        print("Keys match perfectly!")

if __name__ == "__main__":
    main()
