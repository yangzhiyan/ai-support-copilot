import { InboxOutlined } from "@ant-design/icons";
import { Modal, Upload, type UploadProps } from "antd";
import styles from "../KnowledgeBasePage.module.scss";

type UploadDocumentModalProps = {
  open: boolean;
  onClose: () => void;
};

const { Dragger } = Upload;

const uploadProps: UploadProps = {
  accept: ".pdf,.md,.markdown,.txt",
  multiple: true,
  beforeUpload: () => false,
  showUploadList: true
};

export function UploadDocumentModal({ open, onClose }: UploadDocumentModalProps) {
  return (
    <Modal
      title="上传文档"
      open={open}
      okText="完成"
      cancelText="取消"
      onOk={onClose}
      onCancel={onClose}
    >
      <Dragger {...uploadProps} className={styles.uploadArea}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或拖拽文件到此区域</p>
        <p className="ant-upload-hint">支持 PDF、Markdown 和 TXT。当前仅演示本地选择交互。</p>
      </Dragger>
    </Modal>
  );
}
