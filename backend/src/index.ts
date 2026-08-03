import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 3000);
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? "http://localhost:5173";

app.use(
  cors({
    origin: frontendOrigin
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "服务连接成功",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
