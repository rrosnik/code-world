---
sidebar_position: 4
title: Advanced Git Commands
description: Advanced Git operations for power users
---

import CommandGrid from '@site/src/components/CommandGrid';
import { gitCommands } from '@site/src/data/gitCommands';

## Advanced Git Commands

Powerful Git operations for complex scenarios and advanced workflows.

<CommandGrid
  commands={gitCommands.filter(cmd => 
    ['Advanced Operations', 'Undoing Changes', 'Stash Operations'].includes(cmd.category)
  )}
/>

## Interactive Rebase

Rewrite commit history with interactive rebase:

```bash
git rebase -i HEAD~3
```

Available actions:

- **pick**: Use the commit as-is
- **reword**: Use commit but edit message
- **edit**: Use commit but stop for amending
- **squash**: Combine with previous commit
- **drop**: Remove the commit

## Cherry-picking Best Practices

Cherry-pick brings specific commits to current branch:

```bash
# Pick single commit
git cherry-pick abc123

# Pick range of commits
git cherry-pick abc123..def456

# Pick without committing (for modifications)
git cherry-pick --no-commit abc123
```

## Stash Strategies

### Basic Stashing

```bash
# Stash current changes
git stash

# Stash with message
git stash push -m "WIP: implementing feature X"

# Include untracked files
git stash -u
```

### Managing Multiple Stashes

```bash
# List all stashes
git stash list

# Apply specific stash
git stash apply stash@{2}

# Pop specific stash
git stash pop stash@{1}

# Drop specific stash
git stash drop stash@{0}
```

## Advanced Reset Operations

### Soft Reset

Keeps changes in staging area:

```bash
git reset --soft HEAD~1
```

### Mixed Reset (Default)

Keeps changes in working directory:

```bash
git reset HEAD~1
git reset --mixed HEAD~1  # Same as above
```

### Hard Reset

**Dangerous**: Discards all changes:

```bash
git reset --hard HEAD~1
```

## Reflog: Your Safety Net

Git reflog tracks where HEAD has been:

```bash
# View reflog
git reflog

# Recover "lost" commits
git checkout abc123
git checkout -b recovered-work
```

## Advanced Tagging

### Annotated Tags

```bash
# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Tag specific commit
git tag -a v1.0.0 abc123 -m "Release version 1.0.0"

# Push tags
git push origin --tags
```

### Lightweight Tags

```bash
# Create lightweight tag
git tag v1.0.0

# Push specific tag
git push origin v1.0.0
```
