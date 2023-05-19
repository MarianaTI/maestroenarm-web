import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subcategories: [],
  casesQuantity: 0,
};

export const counterSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSubcategories: (state, action) => {
      state.subcategories = action.payload;
    },
    setCasesQuantity: (state, action) => {
      state.casesQuantity = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSubcategories, setCasesQuantity } = counterSlice.actions;

export default counterSlice.reducer;
