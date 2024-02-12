import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from '@components/ErrorBoundary';
import ThemeProvider from '@providers/ThemeProvider';

import router from './routes';

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
