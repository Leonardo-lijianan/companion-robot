# server（Node.js + Express + TypeScript）

## 启动


npm install
npm run dev        # http://localhost:3000/api/health
npm run build && npm start


## 环境变量（W3 起使用）

在 `server/.env` 中填写（该文件已被 `.gitignore` 忽略，禁止提交）：


PORT=3000
DEEPSEEK_API_KEY=<你的 key>
DEEPSEEK_BASE_URL=https://api.deepseek.com


> 注：本工作区禁止创建 `.env.example` 文件（敏感文件策略），故变量清单记录在此。
