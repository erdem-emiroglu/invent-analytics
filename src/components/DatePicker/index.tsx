'use client';

import { DatePicker } from '@mui/x-date-pickers';
import { useRouter, useSearchParams } from 'next/navigation';

import styles from './BaseDatePicker.module.scss';

const BaseDatePicker = () => {
  const router = useRouter();
  const params = useSearchParams();
  const year = params.get('year');

  const onYearChange = (value: Date) => {
    const newYear = value?.getFullYear();
    const newParams = new URLSearchParams(params);
    newParams.delete('page');
    if (!newYear) {
      newParams.delete('year');
    } else {
      newParams.set('year', newYear.toString());
    }
    router.push(`?${newParams.toString()}`);
  };

  const value = year && new Date(year);

  return (
    <DatePicker
      className={styles.datePicker}
      disableFuture={true}
      value={value as Date}
      onChange={(value) => onYearChange(value as Date)}
      slotProps={{ field: { clearable: true } }}
      views={['year']}
    />
  );
};

export default BaseDatePicker;
