import { Container } from '@mui/material';

import IconNoData from '@/components/Icons/IconNoData';
import { NoDataProps } from '@/components/NoData/NoData.types';

import styles from './NoData.module.scss';

const NoData = ({ customIcon, text, component: Component = Container }: NoDataProps) => {
  return (
    <Component className={styles.noData}>
      {customIcon || <IconNoData />}
      <span className={styles.noDataText}>{text || 'No data found'}</span>
    </Component>
  );
};

export default NoData;
