import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trueAnswerCount: 0,
  falseAnswerCount: 0,
  quizAccuracy: 0,
  gameHistory: [],
  totalGameTime: 0,
  timePerQuestion: 0,
  gameSpecialityAndSubspeciality: [],
  shuffleArray: [],
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
    setQuizAccuracy: state => {
      const totalAnswers = state.trueAnswerCount + state.falseAnswerCount;
      const accuracy = (state.trueAnswerCount / totalAnswers) * 100
      state.quizAccuracy = Math.ceil(accuracy);
    },
    setAddGameHistory: (state, action) => {
      state.gameHistory.push(action.payload);
    },
    setTotalGameTimeAndTimePerQuestion: (state, action) => {
      state.totalGameTime = action.payload.valor;
      const totalAnswers = state.trueAnswerCount + state.falseAnswerCount;
      state.timePerQuestion= Math.ceil(state.totalGameTime / totalAnswers);
    },
    setGameSpecialityAndSubspeciality: (state, action) => {
      state.gameSpecialityAndSubspeciality.push(action.payload)
    },
    setShuffleArray: (state, action) => {
      state.shuffleArray.push(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { 
  setTrueAnswerCount, 
  setFalseAnswerCount, 
  setQuizAccuracy, 
  setAddGameHistory, 
  setTotalGameTimeAndTimePerQuestion,
  setGameSpecialityAndSubspeciality,
  setShuffleArray } = gameSlice.actions;

export default gameSlice.reducer;
