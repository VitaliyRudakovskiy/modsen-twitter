import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import RecommendedUser from '@/components/RecommendedUser';
import ThemeProvider from '@/providers/ThemeProvider';
import store from '@/store';

import '@testing-library/jest-dom';

describe('RecommendedUser', () => {
  test('renders user information and follow button', () => {
    const mockUser = {
      name: 'Test User',
      email: 'testuser@example.com',
    };

    render(
      <Provider store={store}>
        <ThemeProvider>
          <RecommendedUser {...mockUser} />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(
      screen.getByText(`@${mockUser.email.split('@')[0]}`)
    ).toBeInTheDocument();
    expect(screen.getByText('Follow')).toBeInTheDocument();
  });
});
