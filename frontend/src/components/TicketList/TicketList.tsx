import { ClockCircleOutlined, InboxOutlined } from "@ant-design/icons";
import { Badge, Button, Space, Tag, Typography } from "antd";
import type { Ticket, TicketPriority } from "../../types";
import styles from "./TicketList.module.scss";

type TicketListProps = {
  tickets: Ticket[];
  selectedTicketId: string;
  onSelectTicket: (ticketId: string) => void;
};

const { Text, Title } = Typography;

const priorityMeta: Record<TicketPriority, { label: string; color: string }> = {
  high: { label: "高", color: "red" },
  medium: { label: "中", color: "gold" },
  low: { label: "低", color: "green" }
};

export function TicketList({ tickets, selectedTicketId, onSelectTicket }: TicketListProps) {
  return (
    <aside className={styles.ticketListPanel}>
      <div className={styles.panelTitleRow}>
        <Space>
          <InboxOutlined />
          <Title level={2}>工单列表</Title>
        </Space>
        <Badge count={tickets.length} color="#1677ff" />
      </div>

      <div className={styles.ticketList}>
        {tickets.map((ticket) => {
          const isSelected = ticket.id === selectedTicketId;
          const priority = priorityMeta[ticket.priority];

          return (
            <Button
              key={ticket.id}
              type="text"
              className={
                isSelected ? `${styles.ticketItem} ${styles.ticketItemActive}` : styles.ticketItem
              }
              onClick={() => onSelectTicket(ticket.id)}
            >
              <div className={styles.ticketMain}>
                <Text strong>{ticket.subject}</Text>
                <Space wrap>
                  <Text>{ticket.companyName}</Text>
                  <Text type="secondary">{ticket.customerName}</Text>
                </Space>
              </div>
              <div className={styles.ticketMeta}>
                <Tag color={priority.color}>{priority.label}优先级</Tag>
                <Text type="secondary">
                  <ClockCircleOutlined /> {ticket.updatedAt}
                </Text>
              </div>
              <div className={styles.ticketTags}>
                {ticket.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}
