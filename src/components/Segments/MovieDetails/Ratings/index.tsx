import { Grid } from '@mui/material';

import RatingCard from '@/components/Cards/RatingCard';
import { getDetails } from '@/store/detailStore';

const RatingSegment = () => {
  const details = getDetails();
  return (
    <Grid container spacing={2}>
      {details.Ratings.map(({ Source, Value }) => (
        <Grid key={Source} item xs={12} sm={6} md={4}>
          <RatingCard rating={Value} source={Source} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RatingSegment;
