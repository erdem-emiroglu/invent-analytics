'use client';

import { TextField } from '@mui/material';
import debounce from '@mui/utils/debounce';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

const BaseSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const search = params.get('search') || '';
  const [inputValue, setInputValue] = useState(() => search);

  const onSearch = useCallback(
    (value: string) => {
      const newParams = new URLSearchParams(params);
      newParams.delete('page');
      if (!value) {
        newParams.delete('search');
      } else {
        newParams.set('search', value.toString());
      }
      router.push(`?${newParams.toString()}`);
    },
    [params, router],
  );

  const debouncedSearch = useMemo(() => debounce(onSearch, 500), [onSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  return <TextField size="small" value={inputValue} onChange={handleInputChange} label="Search" />;
};

export default BaseSearch;
