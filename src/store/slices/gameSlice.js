import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trueAnswerCount: 0,
  falseAnswerCount: 0,
  quizAccuracy: 0,
  gameHistory: [],
  totalGameTime: 0,
  timePerQuestion:0,
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
      const accuracy = (state.trueAnswerCount/totalAnswers)*100
      state.quizAccuracy = Math.ceil(accuracy);
    },
    setAddGameHistory: (state, action) => {
      state.gameHistory.push(action.payload);
    },
    setTotalGameTime: (state, action) => {
      state.totalGameTime = action.payload.valor;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setTrueAnswerCount, setFalseAnswerCount, setQuizAccuracy, setAddGameHistory, setTotalGameTime } = gameSlice.actions;

export default gameSlice.reducer;
