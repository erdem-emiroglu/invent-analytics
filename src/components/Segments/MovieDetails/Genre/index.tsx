import { Chip, Stack } from '@mui/material';

import { getDetails } from '@/store/detailStore';

import styles from './Genre.module.scss';

const GenreSegment = () => {
  const details = getDetails();
  return (
    <Stack className={styles.genreContainer}>
      {details.Genre.split(', ').map((genre: string) => (
        <Chip key={genre} color="primary" label={genre} />
      ))}
      <Chip color="warning" label={`${details.Rated.replace(' Rated', '')} Rated`} />
    </Stack>
  );
};

export default GenreSegment;
