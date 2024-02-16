import { Component } from 'react';

import errorImage from '@/assets/error-image.webp';

import {
  Error,
  ErrorBoundaryImage,
  ErrorBoundaryWrapper,
  ErrorInfoText,
} from './styled';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError || error) {
      return (
        <ErrorBoundaryWrapper>
          <ErrorBoundaryImage src={errorImage} alt='something wrong' />
          <Error>Oops! Something went wrong</Error>
          <ErrorInfoText>{error && error.toString()}</ErrorInfoText>
        </ErrorBoundaryWrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
