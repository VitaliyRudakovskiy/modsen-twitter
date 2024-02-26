import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from './slices/authSlice';
import searchSlice from './slices/searchSlice';
import themeSlice from './slices/themeSlice';
import tweetsSlice from './slices/tweetsSlice';
import userSlice from './slices/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['tweets', 'search'],
};

const rootReducer = combineReducers({
  auth: authSlice,
  theme: themeSlice,
  tweets: tweetsSlice,
  user: userSlice,
  search: searchSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type DispatchRTK = typeof store.dispatch;

export default store;
