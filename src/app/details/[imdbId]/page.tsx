import { Container } from '@mui/material';

import { fetchDetails } from '@/api/fetchDetails';
import MovieDetailCard from '@/components/Cards/MovieDetailCard';
import RatingSegment from '@/components/Segments/MovieDetails/Ratings';
import { setDetails } from '@/store/detailStore';

import styles from './page.module.scss';

type MovieDetailsProps = {
  params: { imdbId: string };
};

const MovieDetails = async ({ params }: MovieDetailsProps) => {
  const details = await fetchDetails(params.imdbId);
  setDetails(details);

  return (
    <main className={styles.gradientContainer}>
      <Container className={styles.wrapper}>
        <MovieDetailCard />
        <RatingSegment />
      </Container>
    </main>
  );
};

export default MovieDetails;
