import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  agents: [],
};

export const agentsSlice = createSlice({
  name: "agentsSlice",
  initialState,
  reducers: {
    addAgent: (state, { payload }) => {
      state.agents = payload;
    },
  },
});

export const { addAgent } = agentsSlice.actions;
export default agentsSlice.reducer;
