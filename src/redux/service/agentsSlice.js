import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agents: [],
  searchTerms: "",
};

export const agentsSlice = createSlice({
  name: "agentsSlice",
  initialState,
  reducers: {
    addAgent: (state, { payload }) => {
      state.agents = payload;
    },
    setSearchTerms: (state, { payload }) => {
      state.searchTerms = payload;
    },
  },
});

export const { addAgent,setSearchTerms } = agentsSlice.actions;
export default agentsSlice.reducer;
