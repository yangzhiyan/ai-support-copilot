import { UploadOutlined } from "@ant-design/icons";
import { Button, Typography, message } from "antd";
import { useMemo, useState } from "react";
import { DocumentDetailsModal } from "./components/DocumentDetailsModal";
import { DocumentFilters } from "./components/DocumentFilters";
import { DocumentStats } from "./components/DocumentStats";
import { DocumentTable } from "./components/DocumentTable";
import { UploadDocumentModal } from "./components/UploadDocumentModal";
import { mockKnowledgeDocuments } from "./mockDocuments";
import type { FileTypeFilter, KnowledgeDocument, OverviewFilter, StatusFilter } from "./types";
import { filterDocuments, getActiveOverviewFilter, getDocumentOverviewItems } from "./utils";
import styles from "./KnowledgeBasePage.module.scss";

const { Paragraph, Title } = Typography;

export function KnowledgeBasePage() {
  const [documents, setDocuments] = useState<KnowledgeDocument[]>(mockKnowledgeDocuments);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [previewDocument, setPreviewDocument] = useState<KnowledgeDocument | null>(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [fileTypeFilter, setFileTypeFilter] = useState<FileTypeFilter>("all");
  const [messageApi, contextHolder] = message.useMessage();

  const overviewItems = useMemo(() => getDocumentOverviewItems(documents), [documents]);
  const activeOverviewFilter = getActiveOverviewFilter(statusFilter);

  const filteredDocuments = useMemo(
    () => filterDocuments(documents, searchKeyword, statusFilter, fileTypeFilter),
    [documents, fileTypeFilter, searchKeyword, statusFilter]
  );

  const handleDelete = (documentId: string) => {
    setDocuments((currentDocuments) =>
      currentDocuments.filter((document) => document.id !== documentId)
    );
    messageApi.success("文档已删除");
  };

  const handleRetry = (documentId: string) => {
    setDocuments((currentDocuments) =>
      currentDocuments.map((document) =>
        document.id === documentId
          ? { ...document, status: "parsing", failureReason: undefined }
          : document
      )
    );
    messageApi.success("已重新提交解析任务");
  };

  const handleOverviewFilterChange = (filter: OverviewFilter) => {
    setStatusFilter(filter);
    setSearchKeyword("");
    setFileTypeFilter("all");
  };

  return (
    <>
      {contextHolder}
      <section className={styles.pageHeader}>
        <div>
          <Title level={1}>知识库</Title>
          <Paragraph>
            上传企业资料，统一管理可供 AI 问答引用的文档内容、解析状态和来源信息。
          </Paragraph>
        </div>
        <Button type="primary" icon={<UploadOutlined />} onClick={() => setUploadOpen(true)}>
          上传文档
        </Button>
      </section>

      <DocumentStats
        items={overviewItems}
        activeFilter={activeOverviewFilter}
        onFilterChange={handleOverviewFilterChange}
      />

      <section className={styles.tablePanel}>
        <DocumentFilters
          searchKeyword={searchKeyword}
          statusFilter={statusFilter}
          fileTypeFilter={fileTypeFilter}
          onSearchKeywordChange={setSearchKeyword}
          onStatusFilterChange={setStatusFilter}
          onFileTypeFilterChange={setFileTypeFilter}
        />

        <DocumentTable
          documents={filteredDocuments}
          onPreview={setPreviewDocument}
          onRetry={handleRetry}
          onDelete={handleDelete}
        />
      </section>

      <UploadDocumentModal open={uploadOpen} onClose={() => setUploadOpen(false)} />

      <DocumentDetailsModal
        document={previewDocument}
        open={previewDocument !== null}
        onClose={() => setPreviewDocument(null)}
      />
    </>
  );
}
