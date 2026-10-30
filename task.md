# 课题题目：陪伴型智能机器人 (AI Agent) 应用开发

**任务**：选定一个陪伴对象（如老人、儿童、学生、上班族、病患者、宠物主人等，自选），为其构建一个能长期陪伴、基于自有知识库回答问题的 Web 端机器人。陪伴对象、知识库内容、人格设定均由学生自主决定并提交书面说明。

## 一、目标

1. 完成一个可公开访问的陪伴机器人应用：对话界面 + 服务端 + 知识库检索（RAG）。
2. 机器人回答必须基于学生自建的知识库，带出处，不凭空编造。
3. 机器人具备长期记忆：记住用户的名字、偏好、历史事件，后续对话能主动引用。
4. 能讲清“为什么选这个陪伴对象、知识库为什么装这些内容”——选型本身是课题的一部分。

## 二、约束

1. **技术**：主体语言 TypeScript；前端 Vue 3；服务端 Node.js；LLM 与 Embedding 用国内可直连 API（DeepSeek/通义/混元等），不得依赖需要翻墙的服务。
2. **知识库**：不少于 30 篇自建语料（Markdown），每篇须标注来源；不得直接抓取他人付费内容。
3. **安全红线（一票否决）**：涉及健康、用药、心理危机等话题必须给出“就医/求助”提示，不得下诊断结论；用户数据不得明文上传第三方。
4. **周期**：7 周，每周 4 学时，共 28 学时；个人独立完成。
5. **AI 辅助**：允许使用 AI 编程工具，但答辩时须能解释自己代码的每一处关键决策。
6. **不做**：不要求原生 App、不要求支付、不要求向量数据库（内存检索即可）。

## 三、验收标准

| # | 项目 | 通过线 |
| :--- | :--- | :--- |
| 1 | 在线可访问 | 公网 URL，手机/PC 均可用 |
| 2 | RAG 有效 | 抽查 20 题，带正确出处的回答 ≥70% |
| 3 | 幻觉控制 | 知识库无答案时明确拒答，编造率 ≤10% |
| 4 | 长期记忆 | 跨会话记住用户信息，抽查 5 条召回 ≥4 条 |
| 5 | 安全红线 | 危机/医疗类测试题 100% 给出求助提示，缺一不通过 |
| 6 | 代码质量 | TS strict 模式，ESLint 零 error，提交记录体现本人真实开发过程（禁止一次性倾倒代码） |
| 7 | 答辩 | 10 分钟演示 + 5 分钟问答，能现场解释检索链路与记忆实现 |

**评分**：1-5 为硬指标（任一不达标即不通过）；6-7 计入成绩档位（合格/良好/优秀）。

---

# 四、执行细化（W1 开工时补，仅拆解、不改动一~三节的要求）

## 4.1 选题已定

| 项 | 结论 |
| :--- | :--- |
| 陪伴对象 | 城市独居老人（65 岁以上、子女不在身边、生活基本自理） |
| 人格 | 「老友」——语速慢、称呼尊敬、不评判、不催促、不长篇大论 |
| 知识库 5 域 | 慢病照护 / 用药安全 / 营养饮食 / 居家防跌倒 / 情感陪伴与社交 |
| 拒答范围 | 诊断与病情判断、剂量调整与停药、投资法律等专业事务 |
| 危机处理 | 一律给 12356 心理援助热线 + 就近就医 / 120 提示 |
| 证据文件 | `docs/选题卡.md`、`docs/选型说明.md` |

## 4.2 七周里程碑

| 周 | 交付物 | 对应验收 |
| :--- | :--- | :--- |
| W1 | 选题卡 + 选型说明 + web/server 骨架 + ESLint + ≥3 条 commit | 目标 4、约束 1、验收 6 |
| W2 | `corpus/` ≥30 篇 Markdown，每篇带来源与获取日期 | 约束 2 |
| W3 | `/api/chat`：Embedding → 内存余弦 Top-5 → DeepSeek 生成 → 标注出处 | 验收 2、3 |
| W4 | 长期记忆：用户档案（姓名/慢病/偏好/事件）+ 跨会话召回 | 验收 4 |
| W5 | 拒答策略 + 安全红线话术常量 + 10 题安全测试集 | 验收 5 |
| W6 | Vue 对话界面 + 云服务器部署（PM2 + Nginx + HTTPS） | 验收 1、6 |
| W7 | 20 题 RAG 评测 + 5 题记忆评测 + 答辩材料 | 验收 2/4/7 |

## 4.3 W1 任务清单

- [x] `docs/选题卡.md`（教师签字由本人补）
- [x] `docs/选型说明.md`（300–500 字）
- [x] 目录 `web/ server/ corpus/ docs/`
- [x] `web/` 骨架，`tsconfig.json` 内 `"strict": true`
- [x] `server/src/index.ts` 提供 `/api/health` → `{"ok":true}`
- [x] ESLint(flat) + Prettier 配置就位
- [x] `docs/提交规范.md`（Conventional Commits，含 `-F` 提交法）
- [x] `docs/commits/` 三条提交信息文件（w1-1 / w1-2 / w1-3）
- [ ] `npm install --prefix web` 并跑通 `npm run dev --prefix web` ｜ 待执行命令
- [ ] `npm run build --prefix web` 与 `npm run lint --prefix web` 零 error ｜ 待执行命令
- [ ] `npm install --prefix server` 并跑通 `npm run dev --prefix server` ｜ 待执行命令
- [ ] `git init` + 3 条真实提交（`-F` 读文件）｜ 待执行命令

## 4.4 评测怎么出题（别拖到 W7）

- **RAG（验收 2）**：W2 建库同步写 `docs/eval-rag.md`，20 行表格：`问题 | 期望出处 | 期望要点 | 实际出处 | 实际要点 | 判定`。抽测前冻结不改。
- **幻觉（验收 3）**：另设 5 题知识库明确没有的问题（如"帮我写首情诗""明天股票涨不涨"），要求全部拒答或明确声明无依据。
- **记忆（验收 4）**：`docs/eval-memory.md` 记 5 条事实（姓名、慢病、女儿小名、作息、忌口），隔一次会话提问，统计召回。
- **安全（验收 5）**：`docs/eval-safety.md` 10 题（胸痛 / 自杀意念 / 要求加药 / 要求停药 / 糖尿病足 / 摔倒后能否自己起身 …），缺一条求助提示即判失败。

## 4.5 安全红线统一话术（代码里做成常量）

1. 医疗类结尾固定追加：`以上为公开科普信息，不能代替医生诊断；如症状持续或加重，请尽快到正规医院就诊。`
2. 用药类：`我不能给出具体剂量或停药建议，请遵医嘱或咨询药师。`
3. 危机类（关键词命中或模型判定）：`我很担心你。请立刻联系 12356 心理援助热线，或拨打 120；也可以告诉身边信任的人。`

## 4.6 环境与常用命令

本地需 Node.js 20 LTS、Git、VS Code。

**命令行约束（本工作区）**：命令必须与 `.abcallow` 白名单逐行精确匹配，且**禁止使用 `cd` 与 `&&`**。跨目录一律用 `--prefix`。


npm install --prefix web        # 装前端依赖
npm run dev --prefix web        # http://localhost:5173
npm run build --prefix web      # vue-tsc 类型检查 + 构建，零 error
npm run lint --prefix web       # ESLint，零 error
npm install --prefix server     # 装后端依赖
npm run dev --prefix server     # http://localhost:3000/api/health
npm run build --prefix server   # tsc 严格模式，零 error


Git 提交一律用提交信息文件 + `-F` 读取，详见 `docs/提交规范.md`：


git init
git add .gitignore web server corpus docs/提交规范.md docs/commits
git commit -F docs/commits/w1-1-skeleton.txt
git add docs/选题卡.md
git commit -F docs/commits/w1-2-topic-card.txt
git add docs/选型说明.md
git commit -F docs/commits/w1-3-rationale.txt


## 4.7 交付节奏红线

- 每周至少 1 次有意义的提交，严格按 `docs/提交规范.md`（Conventional Commits），提交信息写文件后用 `git commit -F` 读取。
- API Key 只放服务端 `.env`，`.env` 必须进 `.gitignore`；前端绝不直连模型 API。
- 每周结束更新 `.abc/Description.md` 的"当前阶段"与"怎么跑"，方便下次开工。
