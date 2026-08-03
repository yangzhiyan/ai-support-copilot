# 企业 AI 智能客服与知识库系统

一个适合求职作品集展示的全栈项目。企业可以上传文档，用户向 AI 提问；AI 根据企业资料回答，并标注引用来源。管理员后续可以查看对话记录和高频问题。

## 技术栈

- 前端：React + TypeScript + Ant Design + Vite
- 后端：Node.js + Express + TypeScript
- 数据库规划：PostgreSQL
- AI 规划：OpenAI API
- 后续规划：RAG、向量数据库、Docker、部署

## 当前进度

- 已创建 `frontend` 和 `backend`
- 后端提供 `GET /health`
- 前端启动后请求 `/health`
- 页面成功显示“服务连接成功”

## 本地启动

要求 Node.js 20+。如果本机默认版本较低，建议先用 nvm 切换：

```bash
nvm install --lts
nvm use --lts
```

```bash
npm install
npm run dev
```

也可以分别启动：

```bash
npm run dev:backend
npm run dev:frontend
```

默认地址：

- 前端：http://localhost:5173
- 后端：http://localhost:3000
- 健康检查：http://localhost:3000/health

## 环境变量

复制后端环境变量示例：

```bash
cp backend/.env.example backend/.env
```

今天的版本暂未接入 OpenAI API 和 PostgreSQL，相关变量用于后续开发。
