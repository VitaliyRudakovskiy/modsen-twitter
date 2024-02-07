import Auth from '@pages/Auth';
import ThemeProvider from '@providers/ThemeProvider';
import ThemeToggler from '@UI/ThemeToggler';

import AppContainer from './styled';

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer>
        <ThemeToggler />
        <Auth />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
