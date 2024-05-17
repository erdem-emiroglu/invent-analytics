export type RenderType<T> = (value: T) => React.ReactNode;

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: RenderType<T>;
};

export type BaseTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  totalData?: number;
  children?: React.ReactNode;
};
