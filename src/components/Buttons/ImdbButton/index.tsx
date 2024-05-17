import { ImdbButtonProps } from '@/components/Buttons/ImdbButton/ImdbButton.types';
import { IMDB_BASE_URL } from '@/constants';

import styles from './ImdbButton.module.scss';

const ImdbButton = ({ imdbId }: ImdbButtonProps) => {
  return (
    <a className={styles.imdbButton} href={`${IMDB_BASE_URL}${imdbId}`} rel="noopener noreferrer" target="_blank">
      View on IMDb
    </a>
  );
};

export default ImdbButton;
