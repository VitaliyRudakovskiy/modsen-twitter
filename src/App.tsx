import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@providers/ThemeProvider';
import ThemeToggler from '@UI/ThemeToggler';

import router from './routes';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
