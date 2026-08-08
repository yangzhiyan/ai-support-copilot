export type KnowledgeDocumentStatus = "waiting" | "parsing" | "completed" | "failed";

export type KnowledgeDocumentFileType = "PDF" | "Markdown" | "TXT";

export type KnowledgeDocumentChunk = {
  id: string;
  title: string;
  content: string;
  source: string;
};

export type KnowledgeDocument = {
  id: string;
  fileName: string;
  fileType: KnowledgeDocumentFileType;
  fileSize: string;
  status: KnowledgeDocumentStatus;
  uploadedAt: string;
  failureReason?: string;
  chunks?: KnowledgeDocumentChunk[];
};

export type StatusFilter = KnowledgeDocumentStatus | "all" | "processing";

export type FileTypeFilter = KnowledgeDocumentFileType | "all";

export type OverviewFilter = "all" | "completed" | "processing" | "failed";

export type OverviewItem = {
  key: OverviewFilter;
  label: string;
  value: number;
  filter: OverviewFilter;
};
