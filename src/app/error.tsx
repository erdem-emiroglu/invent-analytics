'use client';

import ErrorBoundary from '@/components/ErrorBoundary';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error(props: ErrorProps) {
  return <ErrorBoundary {...props} />;
}
