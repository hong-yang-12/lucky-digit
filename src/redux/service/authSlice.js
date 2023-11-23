import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
  user_email: null,
  user_password: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      (state.user = payload.user),
        (state.token = payload.token),
        Cookies.set("user", JSON.stringify(state.user));
      Cookies.set("token", state.token);
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("user");
      Cookies.remove("token");
    },
    rememberUser: (state, { payload }) => {
      (state.user_email = payload.user_email),
        (state.user_password = payload.user_password),
        Cookies.set("user_email", JSON.stringify(state.user_email));
      Cookies.set("user_password", JSON.stringify(state.user_password));
    },
  },
});

export const { addUser, removeUser, rememberUser } = authSlice.actions;
export default authSlice.reducer;
