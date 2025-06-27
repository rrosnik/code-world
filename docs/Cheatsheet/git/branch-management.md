---
sidebar_position: 3
title: Git Branch Management
description: Complete guide to Git branching and merging
---

import CommandGrid from '@site/src/components/CommandGrid';
import { gitCommands } from '@site/src/data/gitCommands';

## Git Branch Management

Master Git branching to work efficiently with multiple features and collaborate with teams.

<CommandGrid
  commands={gitCommands.filter(cmd => cmd.category === 'Branch Management')}
/>

## Branching Strategies

### Git Flow

A branching model with specific branch types:

- **main/master**: Production-ready code
- **develop**: Integration branch for features
- **feature/**: New features
- **release/**: Preparing releases
- **hotfix/**: Critical fixes for production

### GitHub Flow

A simpler model:

- **main**: Always deployable
- **feature branches**: Short-lived branches for features
- **Pull requests**: Code review and discussion

## Common Branching Workflows

### Feature Branch Workflow

```bash
# Create and switch to feature branch
git checkout -b feature/new-login

# Work on your feature
git add .
git commit -m "Add login form"

# Push to remote
git push -u origin feature/new-login

# Merge back to main
git checkout main
git merge feature/new-login

# Clean up
git branch -d feature/new-login
git push origin --delete feature/new-login
```

### Collaborative Workflow

```bash
# Always start with latest main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/user-profile

# Work and commit changes
git add .
git commit -m "Add user profile page"

# Push for collaboration
git push -u origin feature/user-profile

# Keep branch updated with main
git checkout main
git pull origin main
git checkout feature/user-profile
git merge main
```

## Merge vs Rebase

### Merge

- Preserves commit history
- Creates merge commits
- Good for collaborative branches

### Rebase

- Creates linear history
- No merge commits
- Good for local branches before sharing
