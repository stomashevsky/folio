#!/bin/bash

# Fix Chrome for Testing dock jumping issue on macOS
# This script adds LSUIElement=true to Info.plist to hide Chrome from the dock

set -e

PUPPETEER_CACHE_DIR="$HOME/.cache/puppeteer/chrome"

echo "🔍 Searching for Chrome for Testing installations..."

if [ ! -d "$PUPPETEER_CACHE_DIR" ]; then
    echo "❌ Puppeteer Chrome cache directory not found: $PUPPETEER_CACHE_DIR"
    exit 1
fi

# Find all Chrome for Testing app bundles
CHROME_APPS=$(find "$PUPPETEER_CACHE_DIR" -name "Google Chrome for Testing.app" -type d 2>/dev/null)

if [ -z "$CHROME_APPS" ]; then
    echo "❌ No Chrome for Testing installations found"
    exit 1
fi

FIXED_COUNT=0

while IFS= read -r CHROME_APP; do
    INFO_PLIST="$CHROME_APP/Contents/Info.plist"
    
    if [ ! -f "$INFO_PLIST" ]; then
        echo "⚠️  Info.plist not found for: $CHROME_APP"
        continue
    fi
    
    echo ""
    echo "📦 Processing: $CHROME_APP"
    
    # Check if LSUIElement already exists
    if /usr/libexec/PlistBuddy -c "Print :LSUIElement" "$INFO_PLIST" 2>/dev/null; then
        echo "   ✓ LSUIElement already set"
    else
        # Add LSUIElement = true to hide from dock
        echo "   Adding LSUIElement=true..."
        /usr/libexec/PlistBuddy -c "Add :LSUIElement bool true" "$INFO_PLIST"
        echo "   ✓ LSUIElement added"
        FIXED_COUNT=$((FIXED_COUNT + 1))
    fi
done <<< "$CHROME_APPS"

echo ""

# Kill any running Chrome for Testing processes to apply changes
echo "🔄 Stopping any running Chrome for Testing processes..."
pkill -f "Google Chrome for Testing" 2>/dev/null || true

# Reset LaunchServices database to apply changes immediately
echo "🔄 Resetting LaunchServices database..."
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user 2>/dev/null || true

echo ""
if [ $FIXED_COUNT -gt 0 ]; then
    echo "✅ Fixed $FIXED_COUNT Chrome for Testing installation(s)"
else
    echo "✅ All Chrome for Testing installations already configured"
fi
echo ""
echo "Chrome for Testing will no longer appear in the dock."
echo "If you update Chrome, run this script again."
