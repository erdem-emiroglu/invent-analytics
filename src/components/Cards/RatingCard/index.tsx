import { Card, CardContent, Rating, Stack, Typography } from '@mui/material';

import { RatingCardProps } from '@/components/Cards/RatingCard/RatingCard.types';
import { convertRatingValue } from '@/utils/convertRatingValue';

import styles from './RatingCard.module.scss';

const RatingCard = ({ rating, source }: RatingCardProps) => {
  return (
    <Card className={styles.ratingCardContainer}>
      <CardContent>
        <Stack className={styles.cardContent}>
          <Typography className={styles.ratingTitle}>{source}</Typography>
          <Rating value={convertRatingValue(rating)} readOnly />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RatingCard;
