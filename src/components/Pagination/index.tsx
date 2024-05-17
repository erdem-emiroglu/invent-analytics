'use client';

import { Pagination } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

import { BasePaginationProps } from '@/components/Pagination/BasePagination.types';
import useDisabled from '@/hooks/useDisabled';

const BasePagination = ({ totalData }: BasePaginationProps) => {
  const { disabled, disable } = useDisabled();
  const router = useRouter();
  const params = useSearchParams();
  const page = parseInt(params.get('page') || '1');

  const onPageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    if(newPage === page) return;
    disable();
    const newParams = new URLSearchParams(params);
    newParams.set('page', newPage.toString());
    router.push(`?${newParams.toString()}`);
  };

  return <Pagination disabled={disabled} count={Math.ceil(totalData / 10)} page={page} onChange={onPageChange} />;
};

export default BasePagination;
