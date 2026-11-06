# Git 全局配置与换机指南

## 1. 全局配置
如果您更换了电脑，请在新电脑的终端执行以下命令配置您的 Git 身份：

bash
git config --global user.name "Leonardo-lijianan"
git config --global user.email "leonardo-lijianan@outlook.com"


## 2. 换电脑的注意事项
- **完整迁移**：请将整个项目文件夹（包含 `.git` 隐藏目录）一起拷贝，不要只拷 `.git`。
- **未提交的更改**：如果旧电脑上有未提交的修改，记得在新电脑上重新 `git add` 和 `git commit`。
- **最佳实践**：推荐将代码推送到 GitHub 远程仓库，新电脑上直接 `git clone`，无需手工拷贝。

## 3. 常用提交命令
本项目规范要求使用 `-F` 读取文件来提交：
bash
git add .
git commit -F docs/commits/current.txt

