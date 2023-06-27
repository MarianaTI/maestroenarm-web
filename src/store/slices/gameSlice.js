import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trueAnswerCount: 0,
  falseAnswerCount: 0,
  quizAccuracy: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setTrueAnswerCount: (state, action) => {
      state.trueAnswerCount += action.payload.valor;
    },
    setFalseAnswerCount: (state, action) => {
      state.falseAnswerCount += action.payload.valor;
    },
    setQuizAccuracy: (state, action) => {
      const totalAnswers = state.trueAnswerCount + state.falseAnswerCount;
      const accuracy = state.trueAnswerCount/totalAnswers
      state.quizAccuracy = Math.ceil(accuracy);
    }
  },
});

// Action creators are generated for each case reducer function
export const { setTrueAnswerCount , setFalseAnswerCount , setQuizAccuracy} = gameSlice.actions;

export default gameSlice.reducer;
