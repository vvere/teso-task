import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserToken {
  token: string | null;
}

const initialState: UserToken = {
  token: localStorage.getItem('token'),
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      action?.payload
        ? localStorage.setItem('token', action.payload)
        : localStorage.removeItem('token');
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
