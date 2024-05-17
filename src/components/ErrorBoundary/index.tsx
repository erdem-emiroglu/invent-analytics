'use client';

import { Button, Container, Typography, Box } from '@mui/material';

import IconError from '@/components/Icons/IconError';

import styles from './ErrorBoundary.module.scss';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorProps) => {
  return (
    <Container className={styles.container}>
      <Box className={styles.icon}>
        <IconError />
      </Box>
      <Container>
        <Typography variant="h4" className={styles.title}>
          Something went wrong!
        </Typography>
        <Typography variant="subtitle1" className={styles.subtitle} component="p">
          {error.message}
        </Typography>
      </Container>
      <Button variant="contained" color="warning" onClick={reset} className={styles.button}>
        Try again
      </Button>
    </Container>
  );
};

export default ErrorBoundary;
