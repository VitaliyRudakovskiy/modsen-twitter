import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@/types/user';

const initialState: IUser = {
  id: '',
  email: '',
  birthDate: '',
  phone: '',
  name: '',
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (_, action: PayloadAction<IUser>) => ({
      ...action.payload,
    }),
    removeCurrentUser: () => ({
      ...initialState,
    }),
    updateCurrentUser: (state, action: PayloadAction<Partial<IUser>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setCurrentUser, removeCurrentUser, updateCurrentUser } =
  userSlice.actions;

export const selectUser = (state: { user: IUser }) => state.user;

export default userSlice.reducer;
