#!/usr/bin/env bash
set -euo pipefail

# Local release script for @71z/hemcss.
#
# Usage:
#   pnpm release          # version + publish + GitHub Release
#   pnpm release:dry      # dry-run (no publish, no git tags)
#
# Prerequisites:
#   - npm login (as 71zone, with access to @71z org)
#   - gh auth login (for GitHub Releases)

DRY_RUN="${1:-}"
ROOT="$(git rev-parse --show-toplevel)"
PKG_DIR="$ROOT/packages/hemcss"

# ── Guards ──────────────────────────────────────────────────────────
if [ -n "$(git status --porcelain)" ]; then
  echo "✖ Working tree is dirty. Commit or stash changes first."
  exit 1
fi

if [ "$(git branch --show-current)" != "main" ]; then
  echo "✖ Must be on the main branch to release."
  exit 1
fi

git pull --rebase

# ── Build & verify ──────────────────────────────────────────────────
echo "── Building ──"
pnpm build

echo "── Linting ──"
pnpm lint

echo "── Testing ──"
pnpm test

# ── Version (changesets) ────────────────────────────────────────────
echo "── Versioning ──"
pnpm changeset version

VERSION=$(node -p "require('$PKG_DIR/package.json').version")
echo "→ @71z/hemcss@$VERSION"

# Commit version bump + changelog
git add -A
git commit -m "chore(release): @71z/hemcss@$VERSION"
git tag "v$VERSION"

if [ "$DRY_RUN" = "--dry-run" ]; then
  echo "── Dry run ── skipping publish, push, and GitHub Release."
  echo "Run 'git reset HEAD~1 && git tag -d v$VERSION' to undo."
  exit 0
fi

# ── Publish to npm ──────────────────────────────────────────────────
echo "── Publishing to npm ──"
pnpm --filter @71z/hemcss publish --access public --no-git-checks

# ── Push ────────────────────────────────────────────────────────────
echo "── Pushing ──"
git push
git push origin "v$VERSION"

# ── GitHub Release ──────────────────────────────────────────────────
echo "── Creating GitHub Release ──"
CHANGELOG="$PKG_DIR/CHANGELOG.md"
if [ -f "$CHANGELOG" ]; then
  # Extract notes for this version (between first two ## headings)
  NOTES=$(awk '/^## /{if(p) exit; p=1; next} p' "$CHANGELOG")
else
  NOTES="Release @71z/hemcss@$VERSION"
fi

gh release create "v$VERSION" \
  --repo 71zone/hemcss \
  --title "v$VERSION" \
  --notes "$NOTES"

echo "✔ Released @71z/hemcss@$VERSION"
