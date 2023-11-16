import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  is_dark_mode: false,
  // sessionArray: [{ start: "1", end: "1", Sname: "test" }],
};

export const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    set_is_dark_mode: (state, action) => {
      state.is_dark_mode = action.payload;
    },
    // addSession: (state, action) => {
    //   state.sessionArray += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { openSidebar, set_is_dark_mode } = stateSlice.actions;

export default stateSlice.reducer;
