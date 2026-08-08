import { Typography } from "antd";
import type { OverviewFilter, OverviewItem } from "../types";
import styles from "../KnowledgeBasePage.module.scss";

type DocumentStatsProps = {
  items: OverviewItem[];
  activeFilter: OverviewFilter;
  onFilterChange: (filter: OverviewFilter) => void;
};

const { Text } = Typography;

export function DocumentStats({ items, activeFilter, onFilterChange }: DocumentStatsProps) {
  return (
    <section className={styles.overviewGrid}>
      {items.map((item) => (
        <button
          className={
            item.filter === activeFilter
              ? `${styles.overviewItem} ${styles.overviewItemActive}`
              : styles.overviewItem
          }
          type="button"
          key={item.key}
          aria-pressed={item.filter === activeFilter}
          onClick={() => onFilterChange(item.filter)}
        >
          <Text type="secondary">{item.label}</Text>
          <Text className={styles.overviewValue}>{item.value}</Text>
        </button>
      ))}
    </section>
  );
}
