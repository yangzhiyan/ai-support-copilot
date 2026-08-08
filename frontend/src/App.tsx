import { Layout, Typography } from "antd";
import { useMemo, useState } from "react";
import { ConversationPanel } from "./components/ConversationPanel";
import { ReplyPanel } from "./components/ReplyPanel";
import { TicketList } from "./components/TicketList";
import { mockTickets } from "./data/mockTickets";
import styles from "./App.module.scss";

const { Content } = Layout;
const { Text, Title } = Typography;

function App() {
  const [selectedTicketId, setSelectedTicketId] = useState(mockTickets[0]?.id ?? "");

  const selectedTicket = useMemo(
    () => mockTickets.find((ticket) => ticket.id === selectedTicketId) ?? mockTickets[0],
    [selectedTicketId]
  );

  return (
    <Layout className={styles.appShell}>
      <header className={styles.appHeader}>
        <div>
          <Text className={styles.eyebrow}>AI Support Copilot</Text>
          <Title level={1}>企业客服智能工作台</Title>
        </div>
        <Text className={styles.headerMeta}>静态 Demo · TypeScript 模拟数据</Text>
      </header>

      <Content className={styles.workspace}>
        <TicketList
          tickets={mockTickets}
          selectedTicketId={selectedTicket.id}
          onSelectTicket={setSelectedTicketId}
        />
        <ConversationPanel ticket={selectedTicket} />
        <ReplyPanel suggestion={selectedTicket.aiSuggestion} />
      </Content>
    </Layout>
  );
}

export default App;
