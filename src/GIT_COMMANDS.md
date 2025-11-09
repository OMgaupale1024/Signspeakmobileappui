# Git Commands Reference

Quick reference guide for common Git operations with your SignSpeak repository.

## 🚀 Initial Setup

### First Time Setup

```bash
# Configure Git (if not already done)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Navigate to your project
cd Sign-Language-To-Text-and-Speech-Conversion

# Initialize repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "feat: initial release v1.0.0 - SignSpeak brutalist UI"

# Set main branch
git branch -M main

# Add remote repository
git remote add origin https://github.com/OMgaupale1024/sign-language-to-text-converter.git

# Push to GitHub
git push -u origin main
```

---

## 📝 Daily Workflow

### Making Changes

```bash
# 1. Check current status
git status

# 2. See what changed
git diff

# 3. Add specific files
git add components/NewComponent.tsx
git add styles/globals.css

# OR add all changed files
git add .

# 4. Commit with descriptive message
git commit -m "feat: add new feature"

# 5. Push to GitHub
git push origin main
```

### Commit Message Format

```bash
# Feature
git commit -m "feat: add gesture filtering to library"

# Bug fix
git commit -m "fix: resolve dark mode text contrast issue"

# Documentation
git commit -m "docs: update installation instructions"

# Style/Design
git commit -m "style: improve button shadow consistency"

# Refactor
git commit -m "refactor: extract gesture detection logic"

# Performance
git commit -m "perf: optimize image loading"

# Test
git commit -m "test: add unit tests for CameraScreen"

# Chore
git commit -m "chore: update dependencies"
```

---

## 🌿 Branch Management

### Creating Branches

```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# OR create branch without switching
git branch feature/new-feature

# Switch to existing branch
git checkout feature/new-feature
```

### Working with Branches

```bash
# List all branches
git branch

# List remote branches
git branch -r

# List all branches (local + remote)
git branch -a

# Delete local branch
git branch -d feature/old-feature

# Force delete branch
git branch -D feature/old-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

### Merging Branches

```bash
# Switch to main branch
git checkout main

# Merge feature branch into main
git merge feature/new-feature

# Push merged changes
git push origin main
```

---

## 🔄 Syncing Changes

### Pulling Updates

```bash
# Pull latest changes from remote
git pull origin main

# Pull with rebase (cleaner history)
git pull --rebase origin main

# Fetch without merging
git fetch origin
```

### Pushing Changes

```bash
# Push to current branch
git push

# Push to specific branch
git push origin main

# Force push (use carefully!)
git push --force origin main

# Push and set upstream
git push -u origin feature/new-feature
```

---

## 📜 Viewing History

### Commit History

```bash
# View commit history
git log

# View condensed history
git log --oneline

# View last 5 commits
git log -5

# View with graph
git log --graph --oneline --all

# View specific file history
git log -- components/HomeScreen.tsx
```

### Viewing Changes

```bash
# See unstaged changes
git diff

# See staged changes
git diff --staged

# Compare branches
git diff main feature/new-feature

# View specific commit
git show <commit-hash>
```

---

## ⏪ Undoing Changes

### Before Committing

```bash
# Discard changes in file
git checkout -- filename.tsx

# Discard all changes
git checkout -- .

# Unstage file (keep changes)
git reset HEAD filename.tsx

# Unstage all files
git reset HEAD
```

### After Committing

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Undo multiple commits
git reset --hard HEAD~3

# Revert specific commit
git revert <commit-hash>
```

### Amending Commits

```bash
# Fix last commit message
git commit --amend -m "new message"

# Add files to last commit
git add forgotten-file.tsx
git commit --amend --no-edit
```

---

## 🏷️ Tags & Releases

### Creating Tags

```bash
# Create lightweight tag
git tag v1.0.0

# Create annotated tag (recommended)
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"

# Tag specific commit
git tag -a v1.0.0 <commit-hash> -m "Version 1.0.0"

# Push tag to remote
git push origin v1.0.0

# Push all tags
git push origin --tags
```

### Managing Tags

```bash
# List all tags
git tag

# Delete local tag
git tag -d v1.0.0

# Delete remote tag
git push origin --delete v1.0.0

# View tag details
git show v1.0.0
```

---

## 🔍 Useful Commands

### Stashing Changes

```bash
# Stash current changes
git stash

# Stash with message
git stash save "WIP: working on feature"

# List stashes
git stash list

# Apply latest stash
git stash apply

# Apply and remove stash
git stash pop

# Apply specific stash
git stash apply stash@{2}

# Delete stash
git stash drop stash@{0}

# Clear all stashes
git stash clear
```

### Remote Management

```bash
# View remote repositories
git remote -v

# Add remote
git remote add origin <url>

# Change remote URL
git remote set-url origin <new-url>

# Remove remote
git remote remove origin
```

### Cleaning Up

```bash
# Remove untracked files (dry run)
git clean -n

# Remove untracked files
git clean -f

# Remove untracked files and directories
git clean -fd

# Remove ignored files too
git clean -fdx
```

---

## 🚨 Emergency Commands

### Recovering Lost Commits

```bash
# View reflog (all actions)
git reflog

# Restore lost commit
git checkout <commit-hash>

# Create branch from lost commit
git branch recovery <commit-hash>
```

### Fixing Mistakes

```bash
# Abort merge
git merge --abort

# Abort rebase
git rebase --abort

# Abort cherry-pick
git cherry-pick --abort

# Reset to remote state
git fetch origin
git reset --hard origin/main
```

---

## 📋 Common Scenarios

### Scenario 1: Fix Typo in Last Commit

```bash
# Make the fix
# ... edit files ...

# Stage changes
git add .

# Amend last commit
git commit --amend --no-edit

# Force push (if already pushed)
git push --force origin main
```

### Scenario 2: Update from Main Branch

```bash
# Switch to main
git checkout main

# Pull latest
git pull origin main

# Switch to feature branch
git checkout feature/my-feature

# Merge main into feature
git merge main

# Resolve conflicts if any
# ... fix conflicts ...
git add .
git commit -m "merge: resolve conflicts with main"
```

### Scenario 3: Create Release

```bash
# Update version in package.json
# Update CHANGELOG.md

# Commit changes
git add .
git commit -m "chore: release v1.1.0"

# Create tag
git tag -a v1.1.0 -m "Release v1.1.0"

# Push commits and tags
git push origin main
git push origin v1.1.0
```

### Scenario 4: Start New Feature

```bash
# Make sure main is up to date
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/awesome-feature

# Work on feature
# ... make changes ...

# Commit changes
git add .
git commit -m "feat: implement awesome feature"

# Push branch to GitHub
git push -u origin feature/awesome-feature

# Create Pull Request on GitHub
```

---

## 🎯 Quick Reference

```bash
# Status & Info
git status              # Check status
git log --oneline       # View history
git diff                # See changes

# Basic Operations
git add .               # Stage all
git commit -m "msg"     # Commit
git push                # Push changes
git pull                # Pull changes

# Branching
git branch              # List branches
git checkout -b name    # Create branch
git merge branch        # Merge branch

# Undo
git reset HEAD~1        # Undo commit
git checkout -- .       # Discard changes
git stash               # Stash changes
```

---

## 📚 Learn More

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

---

## 💡 Tips

1. **Commit Often** - Small, frequent commits are better
2. **Write Good Messages** - Future you will thank you
3. **Pull Before Push** - Always sync before pushing
4. **Use Branches** - Keep main branch stable
5. **Review Changes** - Use `git diff` before committing
6. **Backup Important Work** - Push to remote regularly

---

**Happy Git-ing! 🚀**
