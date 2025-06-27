# Git Commands Poster

A comprehensive one-page reference for all essential Git commands, organized by category for quick lookup.

import React from 'react';

export const GitPoster = () => (
  <div style={{
    fontFamily: 'monospace',
    fontSize: '12px',
    lineHeight: '1.3',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    border: '2px solid #dee2e6',
    borderRadius: '8px',
    margin: '20px 0',
    maxWidth: '100%',
    overflow: 'auto'
  }}>

    <div style={{
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#2c3e50',
      textTransform: 'uppercase',
      letterSpacing: '2px'
    }}>
      Git Commands Reference Poster
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '15px',
      marginBottom: '20px'
    }}>

      {/* Repository Setup & Cloning */}
      <div style={{
        backgroundColor: '#e3f2fd',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #2196f3'
      }}>
        <div style={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px', fontSize: '14px' }}>
          📁 REPOSITORY SETUP & CLONING
        </div>
        <div>
          <strong>git init</strong> - Initialize new repository<br/>
          <strong>git clone [url]</strong> - Clone repository<br/>
          <strong>git clone --depth 1 [url]</strong> - Shallow clone<br/>
          <strong>git remote add origin [url]</strong> - Add remote<br/>
          <strong>git remote -v</strong> - Show remotes<br/>
          <strong>git remote set-url origin [url]</strong> - Change remote URL
        </div>
      </div>

      {/* Basic Commands */}
      <div style={{
        backgroundColor: '#e8f5e8',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #4caf50'
      }}>
        <div style={{ fontWeight: 'bold', color: '#388e3c', marginBottom: '8px', fontSize: '14px' }}>
          🔧 BASIC COMMANDS
        </div>
        <div>
          <strong>git status</strong> - Show working tree status<br/>
          <strong>git add [file]</strong> - Add file to staging<br/>
          <strong>git add .</strong> - Add all files<br/>
          <strong>git add -A</strong> - Add all changes<br/>
          <strong>git commit -m "message"</strong> - Commit changes<br/>
          <strong>git commit -am "message"</strong> - Add & commit<br/>
          <strong>git diff</strong> - Show unstaged changes<br/>
          <strong>git diff --staged</strong> - Show staged changes
        </div>
      </div>

      {/* Branch Management */}
      <div style={{
        backgroundColor: '#fff3e0',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ff9800'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57c00', marginBottom: '8px', fontSize: '14px' }}>
          🌲 BRANCH MANAGEMENT
        </div>
        <div>
          <strong>git branch</strong> - List branches<br/>
          <strong>git branch [name]</strong> - Create branch<br/>
          <strong>git checkout [branch]</strong> - Switch branch<br/>
          <strong>git checkout -b [name]</strong> - Create & switch<br/>
          <strong>git switch [branch]</strong> - Switch branch (new)<br/>
          <strong>git switch -c [name]</strong> - Create & switch (new)<br/>
          <strong>git branch -d [name]</strong> - Delete branch<br/>
          <strong>git branch -D [name]</strong> - Force delete
        </div>
      </div>

      {/* Remote Operations */}
      <div style={{
        backgroundColor: '#f3e5f5',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #9c27b0'
      }}>
        <div style={{ fontWeight: 'bold', color: '#7b1fa2', marginBottom: '8px', fontSize: '14px' }}>
          🌐 REMOTE OPERATIONS
        </div>
        <div>
          <strong>git fetch</strong> - Download remote changes<br/>
          <strong>git pull</strong> - Fetch & merge<br/>
          <strong>git pull --rebase</strong> - Fetch & rebase<br/>
          <strong>git push</strong> - Upload changes<br/>
          <strong>git push -u origin [branch]</strong> - Set upstream<br/>
          <strong>git push --force-with-lease</strong> - Safe force push<br/>
          <strong>git push --tags</strong> - Push tags
        </div>
      </div>

      {/* Merge & Rebase */}
      <div style={{
        backgroundColor: '#ffebee',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #f44336'
      }}>
        <div style={{ fontWeight: 'bold', color: '#d32f2f', marginBottom: '8px', fontSize: '14px' }}>
          🔀 MERGE & REBASE
        </div>
        <div>
          <strong>git merge [branch]</strong> - Merge branch<br/>
          <strong>git merge --no-ff [branch]</strong> - No fast-forward<br/>
          <strong>git rebase [branch]</strong> - Rebase onto branch<br/>
          <strong>git rebase -i HEAD~3</strong> - Interactive rebase<br/>
          <strong>git rebase --continue</strong> - Continue rebase<br/>
          <strong>git rebase --abort</strong> - Abort rebase<br/>
          <strong>git cherry-pick [commit]</strong> - Apply commit
        </div>
      </div>

      {/* History & Log */}
      <div style={{
        backgroundColor: '#e1f5fe',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #00bcd4'
      }}>
        <div style={{ fontWeight: 'bold', color: '#0097a7', marginBottom: '8px', fontSize: '14px' }}>
          📜 HISTORY & LOG
        </div>
        <div>
          <strong>git log</strong> - Show commit history<br/>
          <strong>git log --oneline</strong> - Compact history<br/>
          <strong>git log --graph</strong> - Visual history<br/>
          <strong>git log --author="name"</strong> - Filter by author<br/>
          <strong>git log --since="2 weeks ago"</strong> - Time filter<br/>
          <strong>git show [commit]</strong> - Show commit details<br/>
          <strong>git blame [file]</strong> - Show line authors
        </div>
      </div>

      {/* Undo & Reset */}
      <div style={{
        backgroundColor: '#fce4ec',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #e91e63'
      }}>
        <div style={{ fontWeight: 'bold', color: '#c2185b', marginBottom: '8px', fontSize: '14px' }}>
          ↩️ UNDO & RESET
        </div>
        <div>
          <strong>git reset HEAD [file]</strong> - Unstage file<br/>
          <strong>git reset --soft HEAD~1</strong> - Undo commit<br/>
          <strong>git reset --hard HEAD~1</strong> - Undo & discard<br/>
          <strong>git revert [commit]</strong> - Create reverse commit<br/>
          <strong>git restore [file]</strong> - Discard changes<br/>
          <strong>git restore --staged [file]</strong> - Unstage file<br/>
          <strong>git clean -fd</strong> - Remove untracked files
        </div>
      </div>

      {/* Stash Operations */}
      <div style={{
        backgroundColor: '#f1f8e9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #8bc34a'
      }}>
        <div style={{ fontWeight: 'bold', color: '#689f38', marginBottom: '8px', fontSize: '14px' }}>
          📦 STASH OPERATIONS
        </div>
        <div>
          <strong>git stash</strong> - Stash changes<br/>
          <strong>git stash push -m "message"</strong> - Stash with message<br/>
          <strong>git stash list</strong> - List stashes<br/>
          <strong>git stash pop</strong> - Apply & delete latest<br/>
          <strong>git stash apply stash@{`{n}`}</strong> - Apply specific<br/>
          <strong>git stash drop stash@{`{n}`}</strong> - Delete stash<br/>
          <strong>git stash clear</strong> - Delete all stashes
        </div>
      </div>

      {/* Tags */}
      <div style={{
        backgroundColor: '#fff8e1',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #ffc107'
      }}>
        <div style={{ fontWeight: 'bold', color: '#f57f17', marginBottom: '8px', fontSize: '14px' }}>
          🏷️ TAGS
        </div>
        <div>
          <strong>git tag</strong> - List tags<br/>
          <strong>git tag v1.0.0</strong> - Create lightweight tag<br/>
          <strong>git tag -a v1.0.0 -m "msg"</strong> - Annotated tag<br/>
          <strong>git tag -d v1.0.0</strong> - Delete tag<br/>
          <strong>git push origin v1.0.0</strong> - Push tag<br/>
          <strong>git push origin --tags</strong> - Push all tags<br/>
          <strong>git checkout v1.0.0</strong> - Checkout tag
        </div>
      </div>

      {/* Configuration */}
      <div style={{
        backgroundColor: '#efebe9',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #795548'
      }}>
        <div style={{ fontWeight: 'bold', color: '#5d4037', marginBottom: '8px', fontSize: '14px' }}>
          ⚙️ CONFIGURATION
        </div>
        <div>
          <strong>git config --global user.name "Name"</strong><br/>
          <strong>git config --global user.email "email"</strong><br/>
          <strong>git config --list</strong> - Show config<br/>
          <strong>git config --global init.defaultBranch main</strong><br/>
          <strong>git config --global core.editor vim</strong><br/>
          <strong>git config --global alias.st status</strong>
        </div>
      </div>

      {/* Advanced Operations */}
      <div style={{
        backgroundColor: '#e8eaf6',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #3f51b5'
      }}>
        <div style={{ fontWeight: 'bold', color: '#303f9f', marginBottom: '8px', fontSize: '14px' }}>
          🚀 ADVANCED OPERATIONS
        </div>
        <div>
          <strong>git reflog</strong> - Show reference log<br/>
          <strong>git bisect start</strong> - Start binary search<br/>
          <strong>git worktree add ../feature feature</strong><br/>
          <strong>git submodule add [url]</strong> - Add submodule<br/>
          <strong>git archive --format=zip HEAD</strong><br/>
          <strong>git gc</strong> - Garbage collection<br/>
          <strong>git fsck</strong> - Check integrity
        </div>
      </div>

      {/* File Operations */}
      <div style={{
        backgroundColor: '#f9fbe7',
        padding: '12px',
        borderRadius: '6px',
        border: '1px solid #cddc39'
      }}>
        <div style={{ fontWeight: 'bold', color: '#827717', marginBottom: '8px', fontSize: '14px' }}>
          📄 FILE OPERATIONS
        </div>
        <div>
          <strong>git rm [file]</strong> - Remove file<br/>
          <strong>git rm --cached [file]</strong> - Untrack file<br/>
          <strong>git mv [old] [new]</strong> - Rename/move<br/>
          <strong>git ls-files</strong> - List tracked files<br/>
          <strong>git checkout HEAD -- [file]</strong> - Restore file<br/>
          <strong>git update-index --skip-worktree [file]</strong>
        </div>
      </div>

    </div>

    {/* Quick Reference Section */}
    <div style={{
      backgroundColor: '#263238',
      color: '#eceff1',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px', textAlign: 'center' }}>
        ⚡ QUICK REFERENCE
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
        <div>
          <strong>Common Workflow:</strong><br/>
          1. git pull<br/>
          2. git checkout -b feature<br/>
          3. git add .<br/>
          4. git commit -m "message"<br/>
          5. git push -u origin feature
        </div>
        <div>
          <strong>Emergency Fixes:</strong><br/>
          • git stash (save work)<br/>
          • git checkout main<br/>
          • git pull<br/>
          • git checkout -b hotfix<br/>
          • (make fixes, commit, push)
        </div>
        <div>
          <strong>Undo Last Commit:</strong><br/>
          • git reset --soft HEAD~1 (keep changes)<br/>
          • git reset --hard HEAD~1 (discard)<br/>
          • git revert HEAD (safe undo)
        </div>
        <div>
          <strong>Useful Aliases:</strong><br/>
          • git config --global alias.co checkout<br/>
          • git config --global alias.br branch<br/>
          • git config --global alias.st status<br/>
          • git config --global alias.unstage 'reset HEAD --'
        </div>
      </div>
    </div>

    {/* Git Flow Diagram */}
    <div style={{
      backgroundColor: '#f5f5f5',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '15px',
      textAlign: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
        📊 GIT WORKFLOW DIAGRAM
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '11px', lineHeight: '1.4' }}>
        Working Directory → Staging Area → Local Repository → Remote Repository<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
        &nbsp;&nbsp;&nbsp;git add&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git commit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git push<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑<br/>
        &nbsp;&nbsp;git restore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git reset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git pull
      </div>
    </div>

  </div>
);

<GitPoster />

## Print-Friendly Version

For printing, you can use your browser's print function. This poster is optimized for:

- **A3 or A4 landscape** orientation for best readability
- **Letter size** works well for desk reference
- **PDF export** for digital storage and sharing

## Color Coding

- 🔵 **Blue**: Repository & Remote operations
- 🟢 **Green**: Basic file operations
- 🟠 **Orange**: Branch management
- 🟣 **Purple**: Remote synchronization
- 🔴 **Red**: Merge & integration
- 🟦 **Cyan**: History & information
- 🩷 **Pink**: Undo & corrections
- 🟡 **Yellow**: Tags & releases
- 🤎 **Brown**: Configuration
- 🟪 **Indigo**: Advanced features

This poster covers all essential Git commands in a compact, visual format perfect for quick reference while coding!
