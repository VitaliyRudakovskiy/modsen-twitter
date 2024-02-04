import { useSelector } from 'react-redux';
import THEME from '@constants/theme';
import { selectTheme } from '@store/slices/themeSlice';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { IThemeProviderProps } from './types';

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const currentTheme = useSelector(selectTheme);

  const themeMode = currentTheme === 'light' ? THEME.dark : THEME.light;

  return (
    <StyledThemeProvider theme={themeMode}>{children}</StyledThemeProvider>
  );
};

export default ThemeProvider;
