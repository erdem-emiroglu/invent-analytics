import { Card, CardContent, Stack } from '@mui/material';

import ImdbButton from '@/components/Buttons/ImdbButton';
import PlotSegment from '@/components/Segments/MovieDetails/Plot';
import PosterSegment from '@/components/Segments/MovieDetails/Poster';
import TitleSegment from '@/components/Segments/MovieDetails/Title';
import { getDetails } from '@/store/detailStore';
import GeneralInfoSegment from 'src/components/Segments/MovieDetails/GeneralInfo';
import GenreSegment from 'src/components/Segments/MovieDetails/Genre';

import styles from './MovieDetailCard.module.scss';

const MovieDetailCard = () => {
  const details = getDetails();

  return (
    <Card className={styles.movieCardContainer}>
      <CardContent>
        <Stack className={styles.contentContainer}>
          <PosterSegment />
          <Stack className={styles.tagsContainer}>
            <TitleSegment />
            <GenreSegment />
          </Stack>
          <Stack className={styles.generalInfoContainer}>
            <GeneralInfoSegment />
            <ImdbButton imdbId={details.imdbID} />
          </Stack>
        </Stack>
        <PlotSegment />
      </CardContent>
    </Card>
  );
};

export default MovieDetailCard;
