# 提交信息草稿箱

## 约定

本工作区**只放行**这一条提交命令：


git commit -F docs/commits/current.txt


所以每次提交的流程固定为：

1. 把**这一次**的提交信息写进 `docs/commits/current.txt`（覆盖，不留旧内容）。
2. `git add -A` 暂存（`current.txt` 已被 `.gitignore` 忽略，不会进仓库）。
3. `git commit -F docs/commits/current.txt`。

同一组命令 7 周复用，不必为每条提交新增白名单。

## 格式

严格遵循 `docs/提交规范.md`（Conventional Commits）：


<type>(<scope>): <subject>

<body>

<footer>


## 为什么用固定文件名

- 白名单 argv 逐 token 精确匹配，路径一变就无法复用。
- 固定 `current.txt` 让一条命令走完所有提交。
- 历史提交信息永久保存在 `git log`，不必另留副本。
