import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import gameModalReducer from "./slices/gameModalSlice";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    gameModal: gameModalReducer
  },
});
