'use client';

import { Select, MenuItem } from '@mui/material';

import { BaseSelectProps } from '@/components/Selects/base/BaseSelect.types';

const BaseSelect = <T,>({ value, options, onSelect }: BaseSelectProps<T>) => {
  const handleSelect = (newValue: T) => {
    onSelect(newValue);
  };

  return (
    <Select
      size="small"
      value={value}
      placeholder="Select a value..."
      onChange={(e) => handleSelect(e.target.value as T)}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value as string}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default BaseSelect;
