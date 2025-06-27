---
sidebar_position: 1
title: Git Commands Cheatsheet
description: Comprehensive Git commands reference with interactive examples
---

import CommandGrid from '@site/src/components/CommandGrid';
import { gitCommands } from '@site/src/data/gitCommands';

A comprehensive, interactive reference for Git commands. Click on any command card to see detailed information, examples, and usage options.

<CommandGrid commands={gitCommands} />

## Quick Reference

### Basic Workflow

1. **Initialize or Clone**: Start with `git init` or `git clone`
2. **Make Changes**: Edit your files
3. **Stage Changes**: Use `git add` to stage files
4. **Commit**: Use `git commit` to save changes
5. **Push**: Use `git push` to upload to remote repository

### Essential Commands

- `git status` - Check repository status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit with message
- `git push` - Push to remote repository
- `git pull` - Pull latest changes

### Branch Management

- `git branch` - List branches
- `git checkout -b <name>` - Create and switch to new branch
- `git merge <branch>` - Merge branch into current branch
- `git branch -d <name>` - Delete branch

## Tips and Best Practices

### Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Keep first line under 50 characters
- Use body to explain what and why vs. how

### Branching Strategy

- Use feature branches for new development
- Keep main/master branch stable
- Use descriptive branch names (`feature/user-authentication`)

### Before You Start

```bash
# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Useful aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

## Common Scenarios

### Undo Last Commit (Keep Changes)

```bash
git reset --soft HEAD~1
```

### Undo Last Commit (Discard Changes)

```bash
git reset --hard HEAD~1
```

### Fix Last Commit Message

```bash
git commit --amend -m "New message"
```

### Switch to Previous Branch

```bash
git switch -
# or
git checkout -
```

### View File Changes

```bash
git diff                 # Unstaged changes
git diff --staged        # Staged changes
git diff HEAD~1          # Changes since last commit
```

## Emergency Commands

### Oh No! I Committed to Wrong Branch

```bash
git reset HEAD~1         # Undo commit, keep changes
git stash               # Stash changes
git checkout correct-branch
git stash pop           # Apply changes to correct branch
```

### I Need to Discard All Local Changes

```bash
git reset --hard HEAD   # Discard all changes
git clean -fd           # Remove untracked files and directories
```

### I Accidentally Deleted a Branch

```bash
git reflog              # Find the commit hash
git checkout -b recovered-branch <commit-hash>
```

---

*This cheatsheet covers the most commonly used Git commands. For more advanced topics, refer to the official [Git documentation](https://git-scm.com/doc).*
