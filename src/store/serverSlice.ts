import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Servers = { name: string; distance: number }[];

type Loading = boolean;

type Error = null | string;

export interface ServerList {
  servers: Servers;
  loading: Loading;
  error: Error;
}

const initialState: ServerList = {
  servers: [],
  loading: false,
  error: null,
};

export const serverSlice = createSlice({
  name: 'server',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<Loading>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setServers: (state, action: PayloadAction<Servers>) => {
      state.servers = action.payload;
    },
  },
});

export const { setLoading, setError, setServers } = serverSlice.actions;

export default serverSlice.reducer;
