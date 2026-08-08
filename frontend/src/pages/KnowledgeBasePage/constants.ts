import type { FileTypeFilter, KnowledgeDocumentStatus, StatusFilter } from "./types";

export const statusMeta: Record<
  KnowledgeDocumentStatus,
  { label: string; color: string; hint: string }
> = {
  waiting: {
    label: "等待解析",
    color: "default",
    hint: "文档已进入队列，等待解析任务开始。"
  },
  parsing: {
    label: "解析中",
    color: "processing",
    hint: "系统正在提取文本并生成可检索知识片段。"
  },
  completed: {
    label: "已完成",
    color: "success",
    hint: "文档已解析完成，可用于后续 AI 问答引用。"
  },
  failed: {
    label: "解析失败",
    color: "error",
    hint: "文档解析失败，请查看失败原因后重新处理。"
  }
};

export const statusFilterOptions: Array<{ value: StatusFilter; label: string }> = [
  { value: "all", label: "全部状态" },
  { value: "processing", label: "处理中" },
  { value: "waiting", label: statusMeta.waiting.label },
  { value: "parsing", label: statusMeta.parsing.label },
  { value: "completed", label: statusMeta.completed.label },
  { value: "failed", label: statusMeta.failed.label }
];

export const fileTypeOptions: Array<{ value: FileTypeFilter; label: string }> = [
  { value: "all", label: "全部类型" },
  { value: "PDF", label: "PDF" },
  { value: "Markdown", label: "Markdown" },
  { value: "TXT", label: "TXT" }
];
