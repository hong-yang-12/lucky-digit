import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  twoD_sale : [],
};

export const saleSlice = createSlice({
  name: "saleSlice",
  initialState,
  reducers: {
    add_twoD_sale: (state, action) => {
      state.twoD_sale += action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const {add_twoD_sale} = saleSlice.actions;

export default saleSlice.reducer;
