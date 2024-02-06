import ThemeProvider from '@providers/ThemeProvider';
import ThemeToggler from '@UI/ThemeToggler';

import AppContainer from './styled';

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer>
        <ThemeToggler />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
