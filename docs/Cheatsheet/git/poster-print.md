# Git Commands Poster - Print Version

**A comprehensive one-page reference for all essential Git commands**

---

## 📁 REPOSITORY SETUP & CLONING
```
git init                          # Initialize new repository
git clone <url>                   # Clone repository
git clone --depth 1 <url>        # Shallow clone
git remote add origin <url>      # Add remote
git remote -v                    # Show remotes
git remote set-url origin <url>  # Change remote URL
```

## 🔧 BASIC COMMANDS
```
git status                       # Show working tree status
git add <file>                   # Add file to staging
git add .                        # Add all files
git add -A                       # Add all changes
git commit -m "message"          # Commit changes
git commit -am "message"         # Add & commit
git diff                         # Show unstaged changes
git diff --staged                # Show staged changes
```

## 🌲 BRANCH MANAGEMENT
```
git branch                       # List branches
git branch <name>                # Create branch
git checkout <branch>            # Switch branch
git checkout -b <name>           # Create & switch
git switch <branch>              # Switch branch (new)
git switch -c <name>             # Create & switch (new)
git branch -d <name>             # Delete branch
git branch -D <name>             # Force delete
```

## 🌐 REMOTE OPERATIONS
```
git fetch                        # Download remote changes
git pull                         # Fetch & merge
git pull --rebase                # Fetch & rebase
git push                         # Upload changes
git push -u origin <branch>      # Set upstream
git push --force-with-lease      # Safe force push
git push --tags                  # Push tags
```

## 🔀 MERGE & REBASE
```
git merge <branch>               # Merge branch
git merge --no-ff <branch>       # No fast-forward
git rebase <branch>              # Rebase onto branch
git rebase -i HEAD~3             # Interactive rebase
git rebase --continue            # Continue rebase
git rebase --abort               # Abort rebase
git cherry-pick <commit>         # Apply commit
```

## 📜 HISTORY & LOG
```
git log                          # Show commit history
git log --oneline                # Compact history
git log --graph                  # Visual history
git log --author="name"          # Filter by author
git log --since="2 weeks ago"    # Time filter
git show <commit>                # Show commit details
git blame <file>                 # Show line authors
```

## ↩️ UNDO & RESET
```
git reset HEAD <file>            # Unstage file
git reset --soft HEAD~1          # Undo commit
git reset --hard HEAD~1          # Undo & discard
git revert <commit>              # Create reverse commit
git restore <file>               # Discard changes
git restore --staged <file>      # Unstage file
git clean -fd                    # Remove untracked files
```

## 📦 STASH OPERATIONS
```
git stash                        # Stash changes
git stash push -m "message"      # Stash with message
git stash list                   # List stashes
git stash pop                    # Apply & delete latest
git stash apply stash@{n}        # Apply specific
git stash drop stash@{n}         # Delete stash
git stash clear                  # Delete all stashes
```

## 🏷️ TAGS
```
git tag                          # List tags
git tag v1.0.0                   # Create lightweight tag
git tag -a v1.0.0 -m "msg"       # Annotated tag
git tag -d v1.0.0                # Delete tag
git push origin v1.0.0           # Push tag
git push origin --tags           # Push all tags
git checkout v1.0.0              # Checkout tag
```

## ⚙️ CONFIGURATION
```
git config --global user.name "Name"
git config --global user.email "email"
git config --list                # Show config
git config --global init.defaultBranch main
git config --global core.editor vim
git config --global alias.st status
```

## 🚀 ADVANCED OPERATIONS
```
git reflog                       # Show reference log
git bisect start                 # Start binary search
git worktree add ../feature feature
git submodule add <url>          # Add submodule
git archive --format=zip HEAD
git gc                           # Garbage collection
git fsck                         # Check integrity
```

## 📄 FILE OPERATIONS
```
git rm <file>                    # Remove file
git rm --cached <file>           # Untrack file
git mv <old> <new>               # Rename/move
git ls-files                     # List tracked files
git checkout HEAD -- <file>     # Restore file
git update-index --skip-worktree <file>
```

---

## ⚡ QUICK REFERENCE

### Common Workflow:
1. `git pull`
2. `git checkout -b feature`
3. `git add .`
4. `git commit -m "message"`
5. `git push -u origin feature`

### Emergency Fixes:
- `git stash` (save work)
- `git checkout main`
- `git pull`
- `git checkout -b hotfix`
- (make fixes, commit, push)

### Undo Last Commit:
- `git reset --soft HEAD~1` (keep changes)
- `git reset --hard HEAD~1` (discard)
- `git revert HEAD` (safe undo)

### Useful Aliases:
```
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
```

---

## 📊 GIT WORKFLOW DIAGRAM

```
Working Directory → Staging Area → Local Repository → Remote Repository
      ↓                  ↓                 ↓                    ↓
   git add          git commit        git push
      ↑                  ↑                 ↑
  git restore       git reset         git pull
```

---

**Print Tips:**
- Best printed on A4/Letter landscape orientation
- Use monospace font for better command readability
- Consider laminating for durability
- Keep handy at your workstation for quick reference
