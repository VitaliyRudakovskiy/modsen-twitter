import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import TweetModal from '@/components/TweetModal';
import ThemeProvider from '@/providers/ThemeProvider';
import store from '@/store';

import '@testing-library/jest-dom';

describe('TweetModal', () => {
  test('renders textarea and close button', () => {
    const mockCloseModal = () => {};

    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider>
          <TweetModal closeModal={mockCloseModal} />
        </ThemeProvider>
      </Provider>
    );

    const textarea = getByTestId('textarea');
    expect(textarea).toBeInTheDocument();

    const closeButton = getByTestId('tweet-button');
    expect(closeButton).toBeInTheDocument();
  });

  test('calls closeModal when close button is clicked', () => {
    let wasCalled = false;
    const mockCloseModal = () => {
      wasCalled = true;
    };

    const { getByTestId } = render(
      <Provider store={store}>
        <ThemeProvider>
          <TweetModal closeModal={mockCloseModal} />
        </ThemeProvider>
      </Provider>
    );

    const closeButton = getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(wasCalled).toBe(true);
  });
});
