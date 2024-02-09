import { ReactNode } from 'react';

export type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export type ErrorBoundaryProps = {
  children: ReactNode;
};
