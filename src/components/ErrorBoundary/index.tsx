import { Component } from 'react';

import errorImage from '@/assets/error-image.webp';

import * as Styled from './styled';
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
        <Styled.ErrorBoundaryWrapper>
          <Styled.ErrorBoundaryImage src={errorImage} alt='something wrong' />
          <Styled.Error>Oops! Something went wrong</Styled.Error>
          <Styled.ErrorInfoText>
            {error && error.toString()}
          </Styled.ErrorInfoText>
        </Styled.ErrorBoundaryWrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
