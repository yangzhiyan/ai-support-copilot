import { Descriptions, Modal, Tag, Typography } from "antd";
import { statusMeta } from "../constants";
import type { KnowledgeDocument } from "../types";
import { getDocumentActionLabel } from "../utils";
import styles from "../KnowledgeBasePage.module.scss";

type DocumentDetailsModalProps = {
  document: KnowledgeDocument | null;
  open: boolean;
  onClose: () => void;
};

const { Paragraph, Text } = Typography;

export function DocumentDetailsModal({ document, open, onClose }: DocumentDetailsModalProps) {
  return (
    <Modal
      width={720}
      title={document ? getDocumentActionLabel(document.status) : "文档信息"}
      open={open}
      footer={null}
      onCancel={onClose}
    >
      {document ? (
        <div className={styles.previewContent}>
          <Descriptions column={1} bordered size="small">
            <Descriptions.Item label="文件名">{document.fileName}</Descriptions.Item>
            <Descriptions.Item label="文件类型">{document.fileType}</Descriptions.Item>
            <Descriptions.Item label="文件大小">{document.fileSize}</Descriptions.Item>
            <Descriptions.Item label="解析状态">
              <Tag color={statusMeta[document.status].color}>
                {statusMeta[document.status].label}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="上传时间">{document.uploadedAt}</Descriptions.Item>
          </Descriptions>

          <section className={styles.previewSection}>
            <Text strong>状态说明</Text>
            <Paragraph>{statusMeta[document.status].hint}</Paragraph>
          </section>

          {document.status === "completed" ? (
            <section className={styles.previewSection}>
              <Text strong>解析结果</Text>
              <div className={styles.chunkList}>
                {(document.chunks ?? []).map((chunk) => (
                  <article className={styles.chunkItem} key={chunk.id}>
                    <Text strong>{chunk.title}</Text>
                    <Paragraph>{chunk.content}</Paragraph>
                    <Text type="secondary">来源：{chunk.source}</Text>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {document.status === "failed" ? (
            <section className={styles.failureBox}>
              <Text strong>失败原因</Text>
              <Paragraph>{document.failureReason ?? "未记录具体失败原因。"}</Paragraph>
            </section>
          ) : null}
        </div>
      ) : null}
    </Modal>
  );
}
