import { Divider, Stack, Typography } from '@mui/material';

import { getDetails } from '@/store/detailStore';

import styles from './Title.module.scss';

const TitleSegment = () => {
  const details = getDetails();
  return (
    <div className={styles.titleContainer}>
      <Typography className={styles.title} variant="h1">
        {details.Title}
      </Typography>
      <Stack direction="row" gap={2}>
        <Typography variant="body2" className={styles.boldFont}>
          {details.Year}
        </Typography>
        <Divider className={styles.divider} orientation="vertical" flexItem />
        <Typography variant="body2">{details.Runtime}</Typography>
      </Stack>
    </div>
  );
};

export default TitleSegment;
