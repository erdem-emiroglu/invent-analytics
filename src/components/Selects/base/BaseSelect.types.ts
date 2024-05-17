type Option<T> = {
  value: T;
  label: string;
};

export type BaseSelectProps<T> = {
  value: T;
  options: Option<T>[];
  onSelect: (value: T) => void;
};
