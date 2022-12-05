import { configureStore } from '@reduxjs/toolkit';
import userSlice from 'store/userSlice';
import serverSlice from 'store/serverSlice';

export const store = configureStore({
  reducer: { user: userSlice, server: serverSlice },
});
