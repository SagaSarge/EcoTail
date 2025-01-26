#!/bin/bash

echo "🧹 Starting Firebase cleanup..."

# Remove root level Firebase files
echo "📄 Removing Firebase configuration files..."
rm -f .firebaserc
rm -f firebase.json
rm -f firestore.indexes.json
rm -f firestore.rules
rm -f .env

# Remove Firebase-related source files
echo "🗂  Removing Firebase-related source files..."
rm -f src/config/firebase-config.ts
rm -f src/services/firestore-service.ts
rm -f src/services/auth-service.ts
rm -f src/hooks/use-auth.ts
rm -f src/utils/firebase-errors.ts
rm -f src/types/auth.ts

# Uninstall Firebase dependencies
echo "📦 Removing Firebase npm dependencies..."
npm uninstall firebase

echo "✨ Cleanup complete! Firebase files and dependencies have been removed."
echo "⚠️  Note: You may need to update any remaining files that had Firebase imports." 