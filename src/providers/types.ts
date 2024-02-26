import { ReactNode } from 'react';

export type IThemeContextProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
};

export type IChildren = {
  children: ReactNode;
};
