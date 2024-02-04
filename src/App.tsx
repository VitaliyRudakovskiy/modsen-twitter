import ThemeProvider from '@providers/ThemeProvider';
import ThemeToggler from '@UI/ThemeToggler';

import Ads from './UI/ads';

const App = () => {
  return (
    <ThemeProvider>
      <Ads />
      <ThemeToggler />
    </ThemeProvider>
  );
};

export default App;
