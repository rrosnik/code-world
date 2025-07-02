---
sidebar_position: 2
title: Git Scenarios
description: Step-by-step scenarios for common Git workflows and problem-solving
---

import ScenarioGrid from '@site/src/components/CommandGrid/ScenarioGrid';
import { gitScenarios } from '@site/src/data/gitScenarios';

Learn Git through practical, step-by-step scenarios that cover real-world situations you'll encounter when working with Git. Each scenario provides detailed instructions, explanations, and warnings to help you understand not just *what* to do, but *why* you're doing it.

## 🎯 How to Use This Guide

1. **Browse scenarios** by category or use the search to find specific topics
2. **Check prerequisites** before starting a scenario
3. **Follow steps carefully** - each includes commands, explanations, and context
4. **Pay attention to warnings** - Git can be powerful but dangerous
5. **Practice in a safe environment** first before applying to important projects

## 📚 Scenario Categories

- **Commit Management** - Working with commits: combining, undoing, and cherry-picking
- **Branch Management** - Creating, merging, and managing branches
- **Working Directory** - Managing your workspace and temporary changes

## ⚠️ Important Safety Tips

- Always work on a copy or test repository when learning
- Never rewrite history on shared/public repositories
- Keep backups of important work before trying complex operations
- When in doubt, check `git status` and `git log` frequently

<!-- markdownlint-disable MD033 -->
<ScenarioGrid scenarios={gitScenarios} />
<!-- markdownlint-enable MD033 -->

## 🔗 Related Resources

- **[Git Commands Cheatsheet](../git/)** - Quick reference for Git commands
- **[Basic Commands](./basic-commands)** - Essential Git commands for everyday use
- **[Branch Management](./branch-management)** - Working with branches and merging
- **[Advanced Commands](./advanced-commands)** - Advanced Git operations

---

💡 **Pro Tip**: After completing a scenario, try to understand the underlying Git concepts. This will help you adapt these techniques to your specific situations.
