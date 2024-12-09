import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthState } from './_models';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveAuth(state, action: PayloadAction<{ user: AuthState['user']; token: string }>) {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    },
    removeAuth(state) {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    },
  },
});

export const { saveAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;
