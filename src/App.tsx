import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary';
import ThemeProvider from '@providers/ThemeProvider';
import ThemeToggler from '@UI/ThemeToggler';

import router from './routes';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ThemeToggler />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
