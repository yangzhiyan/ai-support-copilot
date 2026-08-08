import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import { fileTypeOptions, statusFilterOptions } from "../constants";
import type { FileTypeFilter, StatusFilter } from "../types";
import styles from "../KnowledgeBasePage.module.scss";

type DocumentFiltersProps = {
  searchKeyword: string;
  statusFilter: StatusFilter;
  fileTypeFilter: FileTypeFilter;
  onSearchKeywordChange: (value: string) => void;
  onStatusFilterChange: (value: StatusFilter) => void;
  onFileTypeFilterChange: (value: FileTypeFilter) => void;
};

export function DocumentFilters({
  searchKeyword,
  statusFilter,
  fileTypeFilter,
  onSearchKeywordChange,
  onStatusFilterChange,
  onFileTypeFilterChange
}: DocumentFiltersProps) {
  return (
    <div className={styles.toolbar}>
      <Input
        className={styles.searchInput}
        allowClear
        prefix={<SearchOutlined />}
        placeholder="按文件名搜索"
        value={searchKeyword}
        onChange={(event) => onSearchKeywordChange(event.target.value)}
      />
      <Select<StatusFilter>
        className={styles.filterSelect}
        value={statusFilter}
        options={statusFilterOptions}
        onChange={onStatusFilterChange}
      />
      <Select<FileTypeFilter>
        className={styles.filterSelect}
        value={fileTypeFilter}
        options={fileTypeOptions}
        onChange={onFileTypeFilterChange}
      />
    </div>
  );
}
