import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { selectTheme } from '@/store/slices/themeSlice';
import GlobalStyle from '@/theme/style/global';
import { darkTheme, lightTheme } from '@/theme/theme';

import { IChildren } from './types';

const ThemeProvider = ({ children }: IChildren) => {
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
