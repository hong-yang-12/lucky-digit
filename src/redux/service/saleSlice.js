import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  twoD_sale: [],
  custom_money: "",
};

export const saleSlice = createSlice({
  name: "saleSlice",
  initialState,
  reducers: {
    add_twoD_sale: (state, action) => {
      state.twoD_sale += action.payload;
    },
    incrementCustomMoney: (state, {payload}) => {
      state.custom_money += payload;
    },
    // decrementCustomMoney: (state, action) => {
    //   // state.custom_money.slice(0, -1);
    //   state.custom_money.substring(0, custom_money.length - 1);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { add_twoD_sale, incrementCustomMoney, decrementCustomMoney } =
  saleSlice.actions;

export default saleSlice.reducer;
