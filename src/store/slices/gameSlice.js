import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trueAnswerCount: 0,
  falseAnswerCount: 0,
};

export const counterAnswerSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setTrueAnswerCount: (state, action) => {
      state.trueAnswerCount += action.payload.valor;
    },
    setFalseAnswerCount: (state, action) => {
      state.falseAnswerCount += action.payload.valor;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTrueAnswerCount , setFalseAnswerCount } = counterAnswerSlice.actions;

export default counterAnswerSlice.reducer;
