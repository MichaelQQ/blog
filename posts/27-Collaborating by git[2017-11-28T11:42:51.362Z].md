When developing a project with others, there are some steps we should do before send pull request. Like sync local branch with remote one, fix conflicts, etc. The following is a normal steps we will before sending pull request.

## 1. First thing first, fork a project. 
No matter which #git server you use, (GitHub, GitLab, Bitbucket, etc.) they all provide a easy way to fork a repo. After fork it, you would get a repo **[YOUR_NAME]/[PROJECT_NAME]**.

## 2. Clone the repo and start coding
clone the repo to local
```sh
git clone [THE_REPO_URL]
```
After clone the repo, we could start coding. Before coding, don't forget to create a new branch for your new feature.
```sh
git checkout -b [BRANCH_NAME]
```

## 3. Sync local master branch with original's master branch
After developing the feature, the original repo, your remote repo and local repo would look like below
```
# Original Repo's master branch
A - B - C - D

# Your remote repo's master branch
A - B - C

# Your local repo's master and feature branch
A - B - C
         \
          a - b - c
```
There may have some features developed by others have merged back to original repo. Before sending pull request, we should sync with it to make sure our revised doesn't have conflict with it.

### 3.1 Add Original remote
Cause we cloned from our remote, we don't have original repo in our remote list. we should add remote repo for synchronizing with it.
```sh
git remote add [ORIGINAL_REMOTE_REPO_NAME(ex. upstream)] [ORIGINAL_REMOTE_REPO_URL]
```

### 3.2 Fetch Original remote
Fetch the original master to local
```sh
git fetch upstream master
```

### 3.3 Merge master branches
Before merge upstream/master branch to master branch, **make sure you are in master branch.**
```sh
In Master Branch> git merge upstream/master
```

### 3.4 Rebase feature branch
```
A - B - C - D
         \
          a - b - c
```
Now, our local repo branch would look like above. We should rebase feature branch (starting from C to starting from D). We should put rebase command in feature branch, also, it might have some conflicts when rebasing, it's time to fix it.
```sh
feature branch> git rebase master
```
After we successfully rebase (fixed all conflicts), the branch would look like below.
```
A - B - C - D
             \
              a - b - c
```

## 4. Push to remote and send a pull request
It's time to push our code and send pull request. It's easy to send pull request in git servers (Github, Gitlab, Bitbucket, etc.)
```sh
git push [OUR_REMOTE]
```

# Reference
- [Syncing a fork](https://help.github.com/articles/syncing-a-fork/)
