import { Stack, Typography } from '@mui/material';

import { getDetails } from '@/store/detailStore';
import { checkFalsy } from '@/utils/checkFalsy';

import styles from './GeneralInfo.module.scss';

const GeneralInfoSegment = () => {
  const details = getDetails();

  const columns = [
    { label: 'DIRECTED BY', value: details.Director },
    { label: 'WRITTEN BY', value: details.Writer },
    { label: 'ACTORS', value: details.Actors },
    { label: 'PRODUCED BY', value: details.Production },
    { label: 'LANGUAGE', value: details.Language },
    { label: 'COUNTRY', value: details.Country },
    { label: 'AWARDS', value: details.Awards },
    { label: 'DVD', value: details.DVD },
    { label: 'BOX OFFICE', value: details.BoxOffice },
    { label: 'WEBSITE', value: details.Website },
    { label: 'TOTAL SEASONS', value: details.totalSeasons },
  ];

  return (
    <Stack className={styles.container}>
      {columns.map(({ label, value }) => {
        if (checkFalsy(value)) return null;
        return (
          <div className={styles.infoTextContainer} key={value}>
            <Typography className={styles.infoTextLabel} component="label">
              {label}:
            </Typography>
            <Typography className={styles.infoText} component="desc">
              {value}
            </Typography>
          </div>
        );
      })}
    </Stack>
  );
};

export default GeneralInfoSegment;
