import { ReactNode } from 'react';

export interface IThemeContextProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export interface IThemeProviderProps {
  children: ReactNode;
}
