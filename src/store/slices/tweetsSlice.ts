import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITweets } from '../types';

const initialState: ITweets = {
  count: 0,
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = tweetsSlice.actions;

export const selectCount = (state: { tweets: ITweets }): number =>
  state.tweets.count;

export default tweetsSlice.reducer;
