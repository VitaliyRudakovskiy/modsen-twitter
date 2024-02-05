import { useSelector } from 'react-redux';
import GlobalStyle from '@constants/style/global';
import { darkTheme, lightTheme } from '@constants/theme';
import { selectTheme } from '@store/slices/themeSlice';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { IThemeProviderProps } from './types';

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const currentTheme = useSelector(selectTheme);

  return (
    <StyledThemeProvider
      theme={currentTheme === 'dark' ? darkTheme : lightTheme}
    >
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
