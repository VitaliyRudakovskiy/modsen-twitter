import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuth } from '../types';

const initialState: IAuth = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;

export const selectIsAuth = (state: { auth: IAuth }): boolean =>
  state.auth.isAuth;

export default authSlice.reducer;
