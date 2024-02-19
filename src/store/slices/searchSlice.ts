import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISearch } from '../types';

const initialState: ISearch = {
  input: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;

export const selectSearch = (state: { search: ISearch }): string =>
  state.search.input;

export default searchSlice.reducer;
