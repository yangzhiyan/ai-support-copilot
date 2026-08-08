import { DatabaseOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import type { ReactNode } from "react";
import styles from "./AdminLayout.module.scss";

type AdminLayoutProps = {
  children: ReactNode;
};

const { Sider, Content } = Layout;
const { Text } = Typography;

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Layout className={styles.shell}>
      <Sider className={styles.sider} breakpoint="md" collapsedWidth={64} width={232}>
        <div className={styles.brand}>
          <Text className={styles.brandMark}>AI</Text>
          <div className={styles.brandText}>
            <Text strong>企业 AI 知识库</Text>
            <Text type="secondary">Knowledge Base</Text>
          </div>
        </div>

        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={["knowledge-base"]}
          items={[
            {
              key: "knowledge-base",
              icon: <DatabaseOutlined />,
              label: "知识库"
            }
          ]}
        />
      </Sider>

      <Layout className={styles.main}>
        <Content className={styles.content}>
          <div className={styles.contentInner}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
