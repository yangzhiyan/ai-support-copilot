import { DeleteOutlined, EyeOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Empty, Popconfirm, Space, Table, Tag, Typography, type TableProps } from "antd";
import { statusMeta } from "../constants";
import type {
  KnowledgeDocument,
  KnowledgeDocumentFileType,
  KnowledgeDocumentStatus
} from "../types";
import { getDocumentActionLabel } from "../utils";
import styles from "../KnowledgeBasePage.module.scss";

type DocumentTableProps = {
  documents: KnowledgeDocument[];
  onPreview: (document: KnowledgeDocument) => void;
  onRetry: (documentId: string) => void;
  onDelete: (documentId: string) => void;
};

const { Text } = Typography;

export function DocumentTable({ documents, onPreview, onRetry, onDelete }: DocumentTableProps) {
  const columns: TableProps<KnowledgeDocument>["columns"] = [
    {
      title: "文件名",
      dataIndex: "fileName",
      key: "fileName",
      fixed: "left",
      width: 280,
      render: (fileName: string, record) => (
        <div className={styles.fileCell}>
          <Text strong>{fileName}</Text>
          <Text type="secondary">{record.id}</Text>
        </div>
      )
    },
    {
      title: "文件类型",
      dataIndex: "fileType",
      key: "fileType",
      width: 120,
      render: (fileType: KnowledgeDocumentFileType) => <Tag>{fileType}</Tag>
    },
    {
      title: "文件大小",
      dataIndex: "fileSize",
      key: "fileSize",
      width: 120
    },
    {
      title: "解析状态",
      dataIndex: "status",
      key: "status",
      width: 140,
      render: (status: KnowledgeDocumentStatus) => {
        const meta = statusMeta[status];
        return <Tag color={meta.color}>{meta.label}</Tag>;
      }
    },
    {
      title: "上传时间",
      dataIndex: "uploadedAt",
      key: "uploadedAt",
      width: 180
    },
    {
      title: "操作",
      key: "actions",
      fixed: "right",
      width: 240,
      render: (_, record) => (
        <Space size={4} className={styles.actionGroup}>
          <Button size="small" type="text" icon={<EyeOutlined />} onClick={() => onPreview(record)}>
            {getDocumentActionLabel(record.status)}
          </Button>
          {record.status === "failed" ? (
            <Button
              size="small"
              type="text"
              icon={<ReloadOutlined />}
              onClick={() => onRetry(record.id)}
            >
              重新解析
            </Button>
          ) : null}
          <Popconfirm
            title="删除文档"
            description="删除后将从当前列表移除，确认删除吗？"
            okText="删除"
            cancelText="取消"
            okButtonProps={{ danger: true }}
            onConfirm={() => onDelete(record.id)}
          >
            <Button size="small" type="text" danger icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <Table<KnowledgeDocument>
      rowKey="id"
      columns={columns}
      dataSource={documents}
      pagination={false}
      size="middle"
      scroll={{ x: 1080 }}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="没有匹配的文档，调整筛选条件或上传新资料"
          />
        )
      }}
    />
  );
}
