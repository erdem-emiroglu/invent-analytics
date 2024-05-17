import { Typography } from '@mui/material';

import { getDetails } from '@/store/detailStore';

import styles from './Plot.module.scss';

const PlotSegment = () => {
  const details = getDetails();
  return (
    <Typography className={styles.plot} variant="body1">
      {details.Plot}
    </Typography>
  );
};

export default PlotSegment;
