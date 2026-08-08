import type { KnowledgeDocument } from "./types";

export const mockKnowledgeDocuments: KnowledgeDocument[] = [
  {
    id: "doc-001",
    fileName: "售后服务政策.pdf",
    fileType: "PDF",
    fileSize: "2.4 MB",
    status: "completed",
    uploadedAt: "2026-08-08 09:30",
    chunks: [
      {
        id: "chunk-001",
        title: "售后响应时效",
        content: "标准售后问题需在 2 个工作小时内首次响应，高优先级问题需在 30 分钟内确认。",
        source: "售后服务政策.pdf · 第 2 页"
      },
      {
        id: "chunk-002",
        title: "退款处理规则",
        content: "符合退款条件的订单由客服确认凭证后提交财务复核，预计 3-5 个工作日到账。",
        source: "售后服务政策.pdf · 第 5 页"
      }
    ]
  },
  {
    id: "doc-002",
    fileName: "会员积分规则.md",
    fileType: "Markdown",
    fileSize: "42 KB",
    status: "parsing",
    uploadedAt: "2026-08-08 10:12"
  },
  {
    id: "doc-003",
    fileName: "产品常见问题.txt",
    fileType: "TXT",
    fileSize: "128 KB",
    status: "waiting",
    uploadedAt: "2026-08-08 10:24"
  },
  {
    id: "doc-004",
    fileName: "渠道价格说明.pdf",
    fileType: "PDF",
    fileSize: "1.8 MB",
    status: "failed",
    uploadedAt: "2026-08-07 18:42",
    failureReason: "文档包含扫描图片页，当前无法提取可检索文本。请上传文字版 PDF 或 TXT 文件。"
  },
  {
    id: "doc-005",
    fileName: "门店培训手册.md",
    fileType: "Markdown",
    fileSize: "76 KB",
    status: "completed",
    uploadedAt: "2026-08-07 15:16",
    chunks: [
      {
        id: "chunk-003",
        title: "新员工培训流程",
        content: "新员工需完成产品知识、服务话术和投诉处理三项培训后，方可独立接待客户。",
        source: "门店培训手册.md · 培训流程"
      }
    ]
  }
];
