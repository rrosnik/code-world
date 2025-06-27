---
sidebar_position: 2
title: Git Basic Commands
description: Essential Git commands for daily workflow
---

import CommandGrid from '@site/src/components/CommandGrid';
import { gitCommands } from '@site/src/data/gitCommands';

# Git Basic Commands

Essential Git commands that every developer should know. These cover the basic workflow of version control.

<CommandGrid 
  commands={gitCommands.filter(cmd => 
    ['Repository Setup', 'File Operations', 'Commit Operations'].includes(cmd.category)
  )} 
/>

## Daily Workflow

Most Git workflows follow this pattern:

1. **Check status**: `git status`
2. **See what changed**: `git diff`
3. **Stage changes**: `git add .`
4. **Commit changes**: `git commit -m "descriptive message"`
5. **Push to remote**: `git push`

## Key Concepts

### Working Directory vs Staging Area vs Repository

- **Working Directory**: Your local files as you edit them
- **Staging Area**: Files marked to be included in the next commit
- **Repository**: Committed changes with full history

### Git States

Files in Git can be in one of three states:

- **Modified**: Changed but not staged
- **Staged**: Changed and marked for next commit
- **Committed**: Safely stored in repository

## Best Practices

### Commit Often

Make small, focused commits rather than large ones. This makes it easier to:

- Track down bugs
- Understand project history
- Revert specific changes

### Write Good Commit Messages

- Use imperative mood ("Add feature" not "Added feature")
- First line should be 50 characters or less
- Explain *why* you made the change, not just *what* changed

### Check Before You Commit

Always run `git status` and `git diff --staged` before committing to make sure you're committing what you intend to.
