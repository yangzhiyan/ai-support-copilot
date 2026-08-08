import {
  BarChartOutlined,
  CheckCircleTwoTone,
  CloudUploadOutlined,
  MessageOutlined
} from "@ant-design/icons";
import { Alert, Card, Col, Layout, Row, Space, Spin, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";

type HealthResponse = {
  status: string;
  message: string;
};

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function App() {
  const [loading, setLoading] = useState(true);
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json() as Promise<HealthResponse>;
      })
      .then((data) => {
        setHealth(data);
        setError("");
      })
      .catch((reason: unknown) => {
        setError(reason instanceof Error ? reason.message : "无法连接后端服务");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout className={styles.appShell}>
      <Content className={styles.appContent}>
        <section className={styles.intro}>
          <Space direction="vertical" size={16}>
            <Text className={styles.eyebrow}>AI Support Copilot</Text>
            <Title level={1}>企业 AI 智能客服与知识库系统</Title>
            <Paragraph>
              企业上传知识文档后，用户可以向 AI 提问，系统将基于企业资料回答，并标注引用来源。
            </Paragraph>
          </Space>
        </section>

        <section className={styles.statusSection}>
          <Card className={styles.statusCard}>
            <Space direction="vertical" size={16}>
              <Text strong>后端连接状态</Text>
              {loading ? (
                <Space>
                  <Spin />
                  <Text>正在连接服务...</Text>
                </Space>
              ) : health?.status === "ok" ? (
                <Alert
                  showIcon
                  type="success"
                  message={
                    <Space>
                      <CheckCircleTwoTone twoToneColor="#22c55e" />
                      <Text strong>{health.message}</Text>
                    </Space>
                  }
                />
              ) : (
                <Alert type="error" showIcon message="服务连接失败" description={error} />
              )}
            </Space>
          </Card>
        </section>

        <Row gutter={[16, 16]} className={styles.featureGrid}>
          <Col xs={24} md={8}>
            <Card>
              <Statistic title="文档上传" value="知识库" prefix={<CloudUploadOutlined />} />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Statistic title="AI 问答" value="引用来源" prefix={<MessageOutlined />} />
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card>
              <Statistic title="管理员看板" value="高频问题" prefix={<BarChartOutlined />} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
