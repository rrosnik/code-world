import { GitScenario } from '../components/CommandGrid/types';

export const gitScenarios: GitScenario[] = [
  // Commit Management
  {
    id: 'combine-commits',
    title: 'Combining Multiple Commits',
    description: 'Learn how to combine multiple commits into a single commit using interactive rebase.',
    category: 'Commit Management',
    difficulty: 'Intermediate',
    estimatedTime: '5-10 minutes',
    steps: [
      {
        stepNumber: 1,
        title: 'Check your commit history',
        command: 'git log --oneline -n 5',
        description: 'First, see the recent commits to identify which ones you want to combine.',
        explanation: 'This shows the last 5 commits in a compact format. Identify the commits you want to squash together.'
      },
      {
        stepNumber: 2,
        title: 'Start interactive rebase',
        command: 'git rebase -i HEAD~3',
        description: 'Start interactive rebase for the last 3 commits (adjust number as needed).',
        explanation: 'This opens an editor with a list of commits. You can pick, squash, edit, or drop commits.'
      },
      {
        stepNumber: 3,
        title: 'Mark commits to squash',
        command: 'Change "pick" to "squash" or "s"',
        description: 'In the editor, change "pick" to "squash" (or "s") for commits you want to combine.',
        explanation: 'Keep "pick" for the first commit and change others to "squash". This will combine them into the first commit.'
      },
      {
        stepNumber: 4,
        title: 'Edit the commit message',
        command: 'Edit the combined commit message',
        description: 'After saving, another editor will open to let you edit the combined commit message.',
        explanation: 'You can keep all messages, edit them, or write a completely new message for the combined commit.'
      },
      {
        stepNumber: 5,
        title: 'Verify the result',
        command: 'git log --oneline -n 3',
        description: 'Check that your commits were successfully combined.',
        explanation: 'You should now see fewer commits in your history, with your changes combined into a single commit.'
      }
    ],
    prerequisites: [
      'Basic Git knowledge',
      'Understanding of commits',
      'Familiarity with command line editors (vim/nano)'
    ],
    warnings: [
      'Never rebase commits that have been pushed to a shared repository',
      'Make sure you have a backup or clean working directory',
      'This changes commit history - use with caution'
    ],
    relatedCommands: ['git rebase', 'git log', 'git reset'],
    tags: ['rebase', 'squash', 'history', 'cleanup']
  },
  {
    id: 'undo-last-commit',
    title: 'Undoing the Last Commit',
    description: 'Different ways to undo your last commit depending on your situation.',
    category: 'Commit Management',
    difficulty: 'Beginner',
    estimatedTime: '2-5 minutes',
    steps: [
      {
        stepNumber: 1,
        title: 'Determine your situation',
        command: 'git status',
        description: 'Check if your last commit has been pushed to remote repository.',
        explanation: 'This determines which method to use. If pushed, you need to be more careful.'
      },
      {
        stepNumber: 2,
        title: 'Option A: Keep changes (Soft Reset)',
        command: 'git reset --soft HEAD~1',
        description: 'Undo commit but keep changes staged for re-commit.',
        explanation: 'This removes the last commit but keeps all changes in the staging area. Good for fixing commit messages or adding more changes.'
      },
      {
        stepNumber: 3,
        title: 'Option B: Keep changes unstaged (Mixed Reset)',
        command: 'git reset HEAD~1',
        description: 'Undo commit and unstage changes, but keep them in working directory.',
        explanation: 'Default reset behavior. Removes commit and unstages changes, but files remain modified.'
      },
      {
        stepNumber: 4,
        title: 'Option C: Discard all changes (Hard Reset)',
        command: 'git reset --hard HEAD~1',
        description: 'Completely remove the last commit and all its changes.',
        explanation: 'WARNING: This permanently deletes the commit and all changes. Use only if you\'re sure.'
      },
      {
        stepNumber: 5,
        title: 'Verify the result',
        command: 'git log --oneline -n 3',
        description: 'Confirm that the commit has been removed from history.',
        explanation: 'You should see that the unwanted commit is no longer in your history.'
      }
    ],
    prerequisites: [
      'Basic Git knowledge',
      'Understanding of Git working tree states'
    ],
    warnings: [
      'Hard reset permanently deletes changes',
      'Don\'t reset commits that have been pushed and shared',
      'Always verify your working directory state before resetting'
    ],
    relatedCommands: ['git reset', 'git revert', 'git log'],
    tags: ['reset', 'undo', 'commit', 'history']
  },
  {
    id: 'merge-conflict-resolution',
    title: 'Resolving Merge Conflicts',
    description: 'Step-by-step guide to resolve merge conflicts when combining branches.',
    category: 'Branch Management',
    difficulty: 'Intermediate',
    estimatedTime: '10-15 minutes',
    steps: [
      {
        stepNumber: 1,
        title: 'Attempt the merge',
        command: 'git merge feature-branch',
        description: 'Try to merge your feature branch into the current branch.',
        explanation: 'Git will automatically merge what it can, but stop if there are conflicts that need manual resolution.'
      },
      {
        stepNumber: 2,
        title: 'Check conflict status',
        command: 'git status',
        description: 'See which files have conflicts that need to be resolved.',
        explanation: 'Files with conflicts will be marked as "both modified" and listed under "Unmerged paths".'
      },
      {
        stepNumber: 3,
        title: 'Open conflicted files',
        command: 'code conflicted-file.txt',
        description: 'Open each conflicted file in your editor to resolve conflicts.',
        explanation: 'Look for conflict markers: <<<<<<< HEAD, =======, and >>>>>>> branch-name.'
      },
      {
        stepNumber: 4,
        title: 'Resolve conflicts manually',
        command: 'Edit the file to resolve conflicts',
        description: 'Remove conflict markers and decide which changes to keep.',
        explanation: 'Choose the correct version or combine both changes. Remove all <<<<<<, =======, and >>>>>>> markers.'
      },
      {
        stepNumber: 5,
        title: 'Stage resolved files',
        command: 'git add resolved-file.txt',
        description: 'Stage each file after resolving its conflicts.',
        explanation: 'This tells Git that you\'ve resolved the conflicts in this file.'
      },
      {
        stepNumber: 6,
        title: 'Complete the merge',
        command: 'git commit',
        description: 'Commit the merge with resolved conflicts.',
        explanation: 'Git will create a merge commit with a default message. You can edit it if needed.'
      },
      {
        stepNumber: 7,
        title: 'Verify the merge',
        command: 'git log --oneline --graph -n 5',
        description: 'Check that the merge was completed successfully.',
        explanation: 'You should see a merge commit that brings together both branches.'
      }
    ],
    prerequisites: [
      'Understanding of Git branches',
      'Basic merge concepts',
      'Familiarity with text editors'
    ],
    warnings: [
      'Always test your code after resolving conflicts',
      'Don\'t rush - carefully review each conflict',
      'Make sure all conflict markers are removed'
    ],
    relatedCommands: ['git merge', 'git status', 'git add', 'git commit'],
    tags: ['merge', 'conflicts', 'branches', 'resolution']
  },
  {
    id: 'create-feature-branch',
    title: 'Creating and Working with Feature Branches',
    description: 'Complete workflow for creating, working on, and merging feature branches.',
    category: 'Branch Management',
    difficulty: 'Beginner',
    estimatedTime: '5-10 minutes',
    steps: [
      {
        stepNumber: 1,
        title: 'Update main branch',
        command: 'git checkout main && git pull',
        description: 'Switch to main branch and get the latest changes.',
        explanation: 'Always start with the latest version of main to avoid conflicts later.'
      },
      {
        stepNumber: 2,
        title: 'Create new feature branch',
        command: 'git checkout -b feature/new-feature',
        description: 'Create and switch to a new branch for your feature.',
        explanation: 'Use descriptive names like "feature/user-authentication" or "bugfix/login-error".'
      },
      {
        stepNumber: 3,
        title: 'Make your changes',
        command: 'Edit files as needed',
        description: 'Work on your feature, making commits as you progress.',
        explanation: 'Make small, logical commits with clear commit messages.'
      },
      {
        stepNumber: 4,
        title: 'Commit your changes',
        command: 'git add . && git commit -m "Add new feature"',
        description: 'Stage and commit your changes to the feature branch.',
        explanation: 'Write clear, descriptive commit messages that explain what the change does.'
      },
      {
        stepNumber: 5,
        title: 'Push feature branch',
        command: 'git push -u origin feature/new-feature',
        description: 'Push your feature branch to the remote repository.',
        explanation: 'The -u flag sets up tracking so future pushes only need "git push".'
      },
      {
        stepNumber: 6,
        title: 'Switch back to main',
        command: 'git checkout main',
        description: 'Return to the main branch to merge your feature.',
        explanation: 'Make sure main is up to date before merging.'
      },
      {
        stepNumber: 7,
        title: 'Merge feature branch',
        command: 'git merge feature/new-feature',
        description: 'Merge your feature branch into main.',
        explanation: 'This brings your feature changes into the main branch.'
      },
      {
        stepNumber: 8,
        title: 'Clean up',
        command: 'git branch -d feature/new-feature',
        description: 'Delete the feature branch locally after successful merge.',
        explanation: 'Keep your local branch list clean by removing merged branches.'
      }
    ],
    prerequisites: [
      'Basic Git knowledge',
      'Understanding of branches'
    ],
    warnings: [
      'Always pull latest changes before creating new branches',
      'Use descriptive branch names',
      'Test your feature before merging'
    ],
    relatedCommands: ['git checkout', 'git branch', 'git merge', 'git push'],
    tags: ['branches', 'workflow', 'feature', 'merge']
  },
  {
    id: 'stash-changes',
    title: 'Temporarily Stashing Changes',
    description: 'Save work in progress temporarily and restore it later.',
    category: 'Working Directory',
    difficulty: 'Beginner',
    estimatedTime: '3-5 minutes',
    steps: [
      {
        stepNumber: 1,
        title: 'Check current status',
        command: 'git status',
        description: 'See what changes you have in your working directory.',
        explanation: 'This shows modified files that aren\'t ready to commit yet.'
      },
      {
        stepNumber: 2,
        title: 'Stash your changes',
        command: 'git stash',
        description: 'Save current changes to the stash and clean working directory.',
        explanation: 'This temporarily saves your work and reverts files to the last commit state.'
      },
      {
        stepNumber: 3,
        title: 'Work on something else',
        command: 'git checkout other-branch',
        description: 'Switch branches or work on urgent fixes with a clean state.',
        explanation: 'Your working directory is now clean, so you can safely switch contexts.'
      },
      {
        stepNumber: 4,
        title: 'List stashed changes',
        command: 'git stash list',
        description: 'See all stashed changes when you\'re ready to restore them.',
        explanation: 'Shows all stashes with their reference numbers (stash@{0}, stash@{1}, etc.).'
      },
      {
        stepNumber: 5,
        title: 'Restore stashed changes',
        command: 'git stash pop',
        description: 'Restore the most recent stash and remove it from stash list.',
        explanation: 'This applies the stash and removes it. Use "git stash apply" to keep the stash.'
      },
      {
        stepNumber: 6,
        title: 'Verify restoration',
        command: 'git status',
        description: 'Check that your changes have been restored.',
        explanation: 'You should see your previous work in progress restored to the working directory.'
      }
    ],
    prerequisites: [
      'Basic Git knowledge',
      'Understanding of working directory states'
    ],
    warnings: [
      'Stash only saves tracked files by default',
      'Use git stash -u to include untracked files',
      'Don\'t forget about stashed changes - they don\'t show in normal status'
    ],
    relatedCommands: ['git stash', 'git stash pop', 'git stash apply', 'git stash list'],
    tags: ['stash', 'temporary', 'work-in-progress', 'context-switching']
  },
  {
    id: 'cherry-pick-commit',
    title: 'Cherry-picking Specific Commits',
    description: 'Apply specific commits from one branch to another without merging the entire branch.',
    category: 'Commit Management',
    difficulty: 'Intermediate',
    estimatedTime: '5-8 minutes',
    steps: [
      {
        stepNumber: 1,
        title: 'Identify the commit to cherry-pick',
        command: 'git log --oneline feature-branch',
        description: 'Find the specific commit hash you want to apply.',
        explanation: 'Look for the commit you want to bring to your current branch. Copy its hash.'
      },
      {
        stepNumber: 2,
        title: 'Switch to target branch',
        command: 'git checkout main',
        description: 'Switch to the branch where you want to apply the commit.',
        explanation: 'Make sure you\'re on the correct branch before cherry-picking.'
      },
      {
        stepNumber: 3,
        title: 'Cherry-pick the commit',
        command: 'git cherry-pick <commit-hash>',
        description: 'Apply the specific commit to your current branch.',
        explanation: 'This creates a new commit with the same changes but a different hash.'
      },
      {
        stepNumber: 4,
        title: 'Handle conflicts if any',
        command: 'git status',
        description: 'Check if there are any conflicts that need resolution.',
        explanation: 'If conflicts occur, resolve them like in a merge conflict situation.'
      },
      {
        stepNumber: 5,
        title: 'Complete cherry-pick',
        command: 'git cherry-pick --continue',
        description: 'If there were conflicts, continue after resolving them.',
        explanation: 'Use this after staging resolved conflicts. Skip this step if no conflicts occurred.'
      },
      {
        stepNumber: 6,
        title: 'Verify the result',
        command: 'git log --oneline -n 3',
        description: 'Confirm the commit was successfully applied.',
        explanation: 'You should see the cherry-picked commit as the latest commit on your branch.'
      }
    ],
    prerequisites: [
      'Understanding of commit hashes',
      'Basic knowledge of Git branches',
      'Conflict resolution skills'
    ],
    warnings: [
      'Cherry-picking changes commit history',
      'Can create duplicate commits if not careful',
      'May cause conflicts that need manual resolution'
    ],
    relatedCommands: ['git cherry-pick', 'git log', 'git show'],
    tags: ['cherry-pick', 'selective', 'commits', 'branches']
  }
];
