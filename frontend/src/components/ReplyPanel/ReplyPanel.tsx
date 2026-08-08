import { CopyOutlined, FileSearchOutlined, RobotOutlined } from "@ant-design/icons";
import { Button, Progress, Space, Typography } from "antd";
import type { AiSuggestion } from "../../types";
import styles from "./ReplyPanel.module.scss";

type ReplyPanelProps = {
  suggestion: AiSuggestion;
};

const { Paragraph, Text, Title } = Typography;

export function ReplyPanel({ suggestion }: ReplyPanelProps) {
  return (
    <aside className={styles.replyPanel}>
      <div className={styles.panelTitleRow}>
        <Space>
          <RobotOutlined />
          <Title level={2}>AI 建议回复</Title>
        </Space>
      </div>

      <section className={styles.suggestionBlock}>
        <Text type="secondary">问题摘要</Text>
        <Paragraph>{suggestion.summary}</Paragraph>
      </section>

      <section className={styles.suggestionBlock}>
        <div className={styles.confidenceRow}>
          <Text type="secondary">置信度</Text>
          <Text strong>{suggestion.confidence}%</Text>
        </div>
        <Progress percent={suggestion.confidence} showInfo={false} strokeColor="#22c55e" />
      </section>

      <section className={styles.suggestionReply}>
        <Paragraph>{suggestion.reply}</Paragraph>
      </section>

      <section className={styles.suggestionBlock}>
        <Text type="secondary">引用来源</Text>
        <div className={styles.citationList}>
          {suggestion.citations.map((citation) => (
            <div className={styles.citationItem} key={citation.id}>
              <FileSearchOutlined />
              <div>
                <Text strong>{citation.title}</Text>
                <Text type="secondary">{citation.section}</Text>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Button type="primary" icon={<CopyOutlined />} block>
        复制并发送给客户
      </Button>
    </aside>
  );
}
