import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import ErrorBoundary from '@/components/ErrorBoundary';
import ThemeProvider from '@/providers/ThemeProvider';
import store from '@/store';

import '@testing-library/jest-dom';

describe('ErrorBoundary', () => {
  it('should render children when there is no error', () => {
    const TestComponent = () => <ThemeProvider>Test</ThemeProvider>;

    render(
      <Provider store={store}>
        <ErrorBoundary>
          <TestComponent />
        </ErrorBoundary>
      </Provider>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render error state when there is an error', () => {
    const ErrorComponent = () => {
      throw new Error('This is test error');
    };

    render(
      <Provider store={store}>
        <ThemeProvider>
          <ErrorBoundary>
            <ErrorComponent />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText('Error: This is test error')).toBeInTheDocument();
  });
});
