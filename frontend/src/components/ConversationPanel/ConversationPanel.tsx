import { MessageOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Tag, Typography } from "antd";
import type { Ticket } from "../../types";
import styles from "./ConversationPanel.module.scss";

type ConversationPanelProps = {
  ticket: Ticket;
};

const { Paragraph, Text, Title } = Typography;

export function ConversationPanel({ ticket }: ConversationPanelProps) {
  return (
    <main className={styles.conversationPanel}>
      <div className={styles.conversationHeader}>
        <div>
          <Text className={styles.ticketId}>{ticket.id}</Text>
          <Title level={2}>{ticket.subject}</Title>
          <Space wrap>
            <Text>{ticket.customerName}</Text>
            <Text type="secondary">{ticket.companyName}</Text>
            <Tag color="blue">{ticket.channel}</Tag>
            <Tag>{ticket.status}</Tag>
          </Space>
        </div>
      </div>

      <div className={styles.messageList}>
        {ticket.messages.map((message) => (
          <article
            key={message.id}
            className={
              message.author === "customer"
                ? styles.messageRow
                : `${styles.messageRow} ${styles.messageRowAgent}`
            }
          >
            <Avatar icon={message.author === "customer" ? <UserOutlined /> : <MessageOutlined />} />
            <div className={styles.messageBubble}>
              <div className={styles.messageMeta}>
                <Text strong>{message.senderName}</Text>
                <Text type="secondary">{message.sentAt}</Text>
              </div>
              <Paragraph>{message.content}</Paragraph>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
