import type {
  FileTypeFilter,
  KnowledgeDocument,
  KnowledgeDocumentStatus,
  OverviewFilter,
  OverviewItem,
  StatusFilter
} from "./types";

const isProcessingStatus = (status: KnowledgeDocumentStatus) => {
  return status === "waiting" || status === "parsing";
};

const matchesStatusFilter = (document: KnowledgeDocument, statusFilter: StatusFilter) => {
  if (statusFilter === "all") {
    return true;
  }

  if (statusFilter === "processing") {
    return isProcessingStatus(document.status);
  }

  return document.status === statusFilter;
};

export const filterDocuments = (
  documents: KnowledgeDocument[],
  searchKeyword: string,
  statusFilter: StatusFilter,
  fileTypeFilter: FileTypeFilter
) => {
  const normalizedKeyword = searchKeyword.trim().toLowerCase();

  return documents.filter((document) => {
    const matchesKeyword =
      normalizedKeyword.length === 0 || document.fileName.toLowerCase().includes(normalizedKeyword);
    const matchesFileType = fileTypeFilter === "all" || document.fileType === fileTypeFilter;

    return matchesKeyword && matchesStatusFilter(document, statusFilter) && matchesFileType;
  });
};

export const getDocumentOverviewItems = (documents: KnowledgeDocument[]): OverviewItem[] => {
  return [
    { key: "all", label: "全部文档", value: documents.length, filter: "all" },
    {
      key: "completed",
      label: "已完成",
      value: documents.filter((document) => document.status === "completed").length,
      filter: "completed"
    },
    {
      key: "processing",
      label: "处理中",
      value: documents.filter((document) => isProcessingStatus(document.status)).length,
      filter: "processing"
    },
    {
      key: "failed",
      label: "解析失败",
      value: documents.filter((document) => document.status === "failed").length,
      filter: "failed"
    }
  ];
};

export const getActiveOverviewFilter = (statusFilter: StatusFilter): OverviewFilter => {
  if (statusFilter === "waiting" || statusFilter === "parsing") {
    return "processing";
  }

  if (statusFilter === "completed" || statusFilter === "failed" || statusFilter === "processing") {
    return statusFilter;
  }

  return "all";
};

export const getDocumentActionLabel = (status: KnowledgeDocumentStatus) => {
  if (status === "completed") {
    return "查看解析结果";
  }

  if (status === "failed") {
    return "查看失败原因";
  }

  return "查看状态";
};
