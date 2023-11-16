import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  users: null,
  
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
        state.users = payload;
      },
    // removeUser: (state) => {
    //   state.user = null;
    //   state.token = null;
    //   Cookies.remove("user");
    //   Cookies.remove("token");
    // },
  },
});

export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;
