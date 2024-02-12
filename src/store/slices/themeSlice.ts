import { createSlice } from '@reduxjs/toolkit';

import { IThemeState } from '../types';

const initialState: IThemeState = {
  mode: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: { theme: IThemeState }): 'dark' | 'light' =>
  state.theme.mode;

export default themeSlice.reducer;
