import { GitCommand } from '../components/CommandGrid/types';

export const gitCommands: GitCommand[] = [
  // Repository Setup
  {
    id: 'git-init',
    title: 'Initialize Repository',
    command: 'git init',
    description: 'Initialize a new Git repository in the current directory.',
    category: 'Repository Setup',
    examples: [
      'git init',
      'git init my-project',
      'git init --bare'
    ],
    options: [
      '--bare: Create a bare repository',
      '--shared: Set repository permissions for sharing',
      '--template=<template_directory>: Use custom template'
    ]
  },
  {
    id: 'git-clone',
    title: 'Clone Repository',
    command: 'git clone <repository_url>',
    description: 'Create a local copy of a remote repository.',
    category: 'Repository Setup',
    examples: [
      'git clone https://github.com/user/repo.git',
      'git clone git@github.com:user/repo.git',
      'git clone https://github.com/user/repo.git my-folder'
    ],
    options: [
      '--depth <depth>: Create a shallow clone with limited history',
      '--branch <branch>: Clone specific branch',
      '--single-branch: Clone only one branch',
      '--recursive: Clone with submodules'
    ]
  },

  // File Operations
  {
    id: 'git-add',
    title: 'Stage Changes',
    command: 'git add <file>',
    description: 'Add file changes to the staging area for the next commit.',
    category: 'File Operations',
    examples: [
      'git add file.txt',
      'git add .',
      'git add -A',
      'git add *.js'
    ],
    options: [
      '. : Add all changes in current directory',
      '-A : Add all changes in repository',
      '-u : Add modified and deleted files only',
      '-p : Add changes interactively'
    ]
  },
  {
    id: 'git-status',
    title: 'Check Status',
    command: 'git status',
    description: 'Display the status of the working directory and staging area.',
    category: 'File Operations',
    examples: [
      'git status',
      'git status -s',
      'git status --porcelain'
    ],
    options: [
      '-s : Short format output',
      '--porcelain : Machine-readable output',
      '--ignored : Show ignored files'
    ]
  },
  {
    id: 'git-diff',
    title: 'Show Differences',
    command: 'git diff',
    description: 'Show changes between commits, working directory, and staging area.',
    category: 'File Operations',
    examples: [
      'git diff',
      'git diff --staged',
      'git diff HEAD~1',
      'git diff branch1 branch2'
    ],
    options: [
      '--staged : Show staged changes',
      '--cached : Same as --staged',
      '--name-only : Show only file names',
      '--stat : Show diffstat'
    ]
  },

  // Commit Operations
  {
    id: 'git-commit',
    title: 'Create Commit',
    command: 'git commit -m "message"',
    description: 'Record changes to the repository with a descriptive message.',
    category: 'Commit Operations',
    examples: [
      'git commit -m "Add new feature"',
      'git commit -am "Fix bug"',
      'git commit --amend'
    ],
    options: [
      '-m : Commit message',
      '-a : Stage all modified files',
      '--amend : Modify last commit',
      '--no-verify : Skip pre-commit hooks'
    ]
  },
  {
    id: 'git-log',
    title: 'View Commit History',
    command: 'git log',
    description: 'Display commit history and information.',
    category: 'Commit Operations',
    examples: [
      'git log',
      'git log --oneline',
      'git log --graph',
      'git log --since="2 weeks ago"'
    ],
    options: [
      '--oneline : Condensed format',
      '--graph : Show branch graph',
      '--stat : Show file statistics',
      '--author=<name> : Filter by author'
    ]
  },
  {
    id: 'git-show',
    title: 'Show Commit Details',
    command: 'git show <commit>',
    description: 'Display information about a specific commit.',
    category: 'Commit Operations',
    examples: [
      'git show HEAD',
      'git show abc123',
      'git show --name-only'
    ],
    options: [
      '--name-only : Show only file names',
      '--stat : Show file statistics',
      '--pretty=format : Custom format'
    ]
  },

  // Branch Management
  {
    id: 'git-branch',
    title: 'Manage Branches',
    command: 'git branch',
    description: 'List, create, or delete branches.',
    category: 'Branch Management',
    examples: [
      'git branch',
      'git branch new-feature',
      'git branch -d old-branch'
    ],
    options: [
      '-a : Show all branches (local and remote)',
      '-r : Show remote branches',
      '-d : Delete branch',
      '-D : Force delete branch'
    ]
  },
  {
    id: 'git-checkout',
    title: 'Switch Branch/Restore Files',
    command: 'git checkout <branch>',
    description: 'Switch to a different branch or restore files.',
    category: 'Branch Management',
    examples: [
      'git checkout main',
      'git checkout -b new-feature',
      'git checkout -- file.txt'
    ],
    options: [
      '-b : Create and switch to new branch',
      '-B : Force create and switch',
      '-- <file> : Restore file from HEAD'
    ]
  },
  {
    id: 'git-switch',
    title: 'Switch Branches',
    command: 'git switch <branch>',
    description: 'Switch to an existing branch (Git 2.23+).',
    category: 'Branch Management',
    examples: [
      'git switch main',
      'git switch -c new-feature',
      'git switch -'
    ],
    options: [
      '-c : Create and switch to new branch',
      '-C : Force create and switch',
      '- : Switch to previous branch'
    ]
  },
  {
    id: 'git-merge',
    title: 'Merge Branches',
    command: 'git merge <branch>',
    description: 'Merge another branch into the current branch.',
    category: 'Branch Management',
    examples: [
      'git merge feature-branch',
      'git merge --no-ff feature',
      'git merge --squash feature'
    ],
    options: [
      '--no-ff : Create merge commit even for fast-forward',
      '--squash : Squash commits into one',
      '--abort : Abort current merge'
    ]
  },

  // Remote Operations
  {
    id: 'git-remote',
    title: 'Manage Remotes',
    command: 'git remote',
    description: 'Manage remote repository connections.',
    category: 'Remote Operations',
    examples: [
      'git remote -v',
      'git remote add origin <url>',
      'git remote remove origin'
    ],
    options: [
      '-v : Show remote URLs',
      'add <name> <url> : Add new remote',
      'remove <name> : Remove remote',
      'rename <old> <new> : Rename remote'
    ]
  },
  {
    id: 'git-fetch',
    title: 'Fetch Changes',
    command: 'git fetch',
    description: 'Download objects and refs from remote repository.',
    category: 'Remote Operations',
    examples: [
      'git fetch',
      'git fetch origin',
      'git fetch --all'
    ],
    options: [
      '--all : Fetch from all remotes',
      '--prune : Remove remote-tracking branches',
      '--tags : Fetch tags'
    ]
  },
  {
    id: 'git-pull',
    title: 'Pull Changes',
    command: 'git pull',
    description: 'Fetch and merge changes from remote repository.',
    category: 'Remote Operations',
    examples: [
      'git pull',
      'git pull origin main',
      'git pull --rebase'
    ],
    options: [
      '--rebase : Rebase instead of merge',
      '--no-commit : Don\'t auto-commit merge',
      '--ff-only : Fast-forward only'
    ]
  },
  {
    id: 'git-push',
    title: 'Push Changes',
    command: 'git push',
    description: 'Upload local repository content to remote repository.',
    category: 'Remote Operations',
    examples: [
      'git push',
      'git push origin main',
      'git push -u origin feature'
    ],
    options: [
      '-u : Set upstream tracking',
      '--force : Force push (dangerous)',
      '--tags : Push tags',
      '--delete : Delete remote branch'
    ]
  },

  // Undoing Changes
  {
    id: 'git-reset',
    title: 'Reset Changes',
    command: 'git reset',
    description: 'Reset current HEAD to specified state.',
    category: 'Undoing Changes',
    examples: [
      'git reset HEAD~1',
      'git reset --hard HEAD~1',
      'git reset --soft HEAD~1'
    ],
    options: [
      '--soft : Keep changes in staging area',
      '--mixed : Keep changes in working directory',
      '--hard : Discard all changes (dangerous)'
    ]
  },
  {
    id: 'git-revert',
    title: 'Revert Commit',
    command: 'git revert <commit>',
    description: 'Create a new commit that undoes changes from a previous commit.',
    category: 'Undoing Changes',
    examples: [
      'git revert HEAD',
      'git revert abc123',
      'git revert --no-commit HEAD~3..HEAD'
    ],
    options: [
      '--no-commit : Don\'t auto-commit revert',
      '--edit : Edit revert commit message',
      '-m : Specify parent for merge commit'
    ]
  },
  {
    id: 'git-restore',
    title: 'Restore Files',
    command: 'git restore <file>',
    description: 'Restore working tree files (Git 2.23+).',
    category: 'Undoing Changes',
    examples: [
      'git restore file.txt',
      'git restore --staged file.txt',
      'git restore --source=HEAD~1 file.txt'
    ],
    options: [
      '--staged : Restore from staging area',
      '--worktree : Restore working directory',
      '--source=<commit> : Restore from specific commit'
    ]
  },

  // Stash Operations
  {
    id: 'git-stash',
    title: 'Stash Changes',
    command: 'git stash',
    description: 'Temporarily store uncommitted changes.',
    category: 'Stash Operations',
    examples: [
      'git stash',
      'git stash push -m "WIP: feature"',
      'git stash -u'
    ],
    options: [
      'push -m <message> : Stash with message',
      '-u : Include untracked files',
      '-k : Keep staged changes'
    ]
  },
  {
    id: 'git-stash-pop',
    title: 'Apply Stash',
    command: 'git stash pop',
    description: 'Apply and remove the most recent stash.',
    category: 'Stash Operations',
    examples: [
      'git stash pop',
      'git stash pop stash@{1}',
      'git stash apply'
    ],
    options: [
      'apply : Apply without removing',
      'drop : Remove without applying',
      'list : Show all stashes'
    ]
  },

  // Configuration
  {
    id: 'git-config',
    title: 'Configure Git',
    command: 'git config',
    description: 'Set or get Git configuration options.',
    category: 'Configuration',
    examples: [
      'git config --global user.name "Your Name"',
      'git config --global user.email "you@example.com"',
      'git config --list'
    ],
    options: [
      '--global : Global configuration',
      '--local : Repository-specific config',
      '--list : Show all configuration'
    ]
  },

  // Advanced Operations
  {
    id: 'git-rebase',
    title: 'Rebase Commits',
    command: 'git rebase <branch>',
    description: 'Reapply commits on top of another base tip.',
    category: 'Advanced Operations',
    examples: [
      'git rebase main',
      'git rebase -i HEAD~3',
      'git rebase --continue'
    ],
    options: [
      '-i : Interactive rebase',
      '--continue : Continue after resolving conflicts',
      '--abort : Abort rebase operation'
    ]
  },
  {
    id: 'git-cherry-pick',
    title: 'Cherry Pick',
    command: 'git cherry-pick <commit>',
    description: 'Apply changes from specific commit to current branch.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick abc123',
      'git cherry-pick --no-commit abc123',
      'git cherry-pick HEAD~2..HEAD'
    ],
    options: [
      '--no-commit : Don\'t auto-commit',
      '--edit : Edit commit message',
      '-x : Add cherry-pick reference'
    ]
  },
  {
    id: 'git-cherry-pick-edit',
    title: 'Cherry Pick with Edit',
    command: 'git cherry-pick --edit <commit>',
    description: 'Apply changes from a commit and edit the commit message before committing.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --edit abc123',
      'git cherry-pick -e master~1'
    ],
    options: [
      '-e : Same as --edit',
      '--edit : Edit commit message before committing'
    ]
  },
  {
    id: 'git-cherry-pick-no-commit',
    title: 'Cherry Pick without Commit',
    command: 'git cherry-pick --no-commit <commit>',
    description: 'Apply changes to working tree and index without creating a commit.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --no-commit abc123',
      'git cherry-pick -n master~1 next',
      'git cherry-pick -n HEAD~3..HEAD'
    ],
    options: [
      '-n : Same as --no-commit',
      '--no-commit : Apply changes without committing'
    ]
  },
  {
    id: 'git-cherry-pick-mainline',
    title: 'Cherry Pick from Merge',
    command: 'git cherry-pick -m <parent-number> <commit>',
    description: 'Cherry-pick a merge commit by specifying which parent to use as mainline.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick -m 1 abc123',
      'git cherry-pick --mainline 2 merge-commit'
    ],
    options: [
      '-m <number> : Specify parent number (starting from 1)',
      '--mainline <number> : Same as -m'
    ]
  },
  {
    id: 'git-cherry-pick-signoff',
    title: 'Cherry Pick with Signoff',
    command: 'git cherry-pick --signoff <commit>',
    description: 'Apply changes and add a Signed-off-by trailer to the commit message.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --signoff abc123',
      'git cherry-pick -s master~1'
    ],
    options: [
      '-s : Same as --signoff',
      '--signoff : Add Signed-off-by trailer'
    ]
  },
  {
    id: 'git-cherry-pick-gpg',
    title: 'Cherry Pick with GPG Sign',
    command: 'git cherry-pick --gpg-sign <commit>',
    description: 'Apply changes and GPG-sign the resulting commit.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --gpg-sign abc123',
      'git cherry-pick -S abc123',
      'git cherry-pick -S[keyid] abc123'
    ],
    options: [
      '-S : Same as --gpg-sign',
      '--gpg-sign[=<keyid>] : GPG-sign with optional key ID',
      '--no-gpg-sign : Disable GPG signing'
    ]
  },
  {
    id: 'git-cherry-pick-ff',
    title: 'Cherry Pick Fast-Forward',
    command: 'git cherry-pick --ff <commit>',
    description: 'Perform fast-forward if current HEAD is same as parent of cherry-picked commit.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --ff abc123',
      'git cherry-pick --ff ..next'
    ],
    options: [
      '--ff : Enable fast-forward when possible'
    ]
  },
  {
    id: 'git-cherry-pick-empty',
    title: 'Cherry Pick Empty Commits',
    command: 'git cherry-pick --allow-empty <commit>',
    description: 'Allow cherry-picking empty commits that would normally be skipped.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --allow-empty abc123',
      'git cherry-pick --empty=keep abc123',
      'git cherry-pick --empty=drop abc123'
    ],
    options: [
      '--allow-empty : Preserve empty commits',
      '--empty=drop : Drop redundant commits',
      '--empty=keep : Keep redundant commits',
      '--empty=stop : Stop at redundant commits (default)'
    ]
  },
  {
    id: 'git-cherry-pick-continue',
    title: 'Continue Cherry Pick',
    command: 'git cherry-pick --continue',
    description: 'Continue cherry-pick operation after resolving conflicts.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --continue',
      'git add . && git cherry-pick --continue'
    ],
    options: [
      '--continue : Continue after conflict resolution'
    ]
  },
  {
    id: 'git-cherry-pick-abort',
    title: 'Abort Cherry Pick',
    command: 'git cherry-pick --abort',
    description: 'Cancel the cherry-pick operation and return to pre-cherry-pick state.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --abort',
      'git status && git cherry-pick --abort'
    ],
    options: [
      '--abort : Cancel operation and restore previous state'
    ]
  },
  {
    id: 'git-cherry-pick-skip',
    title: 'Skip Cherry Pick',
    command: 'git cherry-pick --skip',
    description: 'Skip the current commit and continue with the rest of the sequence.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --skip'
    ],
    options: [
      '--skip : Skip current commit in sequence'
    ]
  },
  {
    id: 'git-cherry-pick-quit',
    title: 'Quit Cherry Pick',
    command: 'git cherry-pick --quit',
    description: 'Forget about the current operation but keep any changes made.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --quit'
    ],
    options: [
      '--quit : Clear sequencer state but keep changes'
    ]
  },
  {
    id: 'git-cherry-pick-range',
    title: 'Cherry Pick Range',
    command: 'git cherry-pick <commit1>..<commit2>',
    description: 'Apply a range of commits to the current branch.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick master~4..master~2',
      'git cherry-pick ..master',
      'git cherry-pick ^HEAD master'
    ],
    options: [
      '..commit : All commits up to specified commit',
      'commit1..commit2 : Range between two commits',
      '^commit : Exclude commits reachable from commit'
    ]
  },
  {
    id: 'git-cherry-pick-strategy',
    title: 'Cherry Pick with Strategy',
    command: 'git cherry-pick --strategy=<strategy> <commit>',
    description: 'Use specific merge strategy when cherry-picking commits.',
    category: 'Advanced Operations',
    examples: [
      'git cherry-pick --strategy=recursive abc123',
      'git cherry-pick -X patience topic^',
      'git cherry-pick --strategy-option=ours abc123'
    ],
    options: [
      '--strategy=<strategy> : Use specific merge strategy',
      '-X<option> : Pass option to merge strategy',
      '--strategy-option=<option> : Same as -X'
    ]
  },
  {
    id: 'git-tag',
    title: 'Manage Tags',
    command: 'git tag',
    description: 'Create, list, or delete tags for marking release points.',
    category: 'Advanced Operations',
    examples: [
      'git tag',
      'git tag v1.0.0',
      'git tag -a v1.0.0 -m "Release version 1.0.0"'
    ],
    options: [
      '-a : Create annotated tag',
      '-m : Tag message',
      '-d : Delete tag',
      '--list : List tags'
    ]
  }
];
