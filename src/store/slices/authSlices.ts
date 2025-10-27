import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types/global";

const initialState: AuthState = {
  isAuthenticated: false,
  user: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
