import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import filterDrawerReducer from "./slices/filterDrawerSlice";


export const store = configureStore({
  reducer: {
    game: gameReducer,
    filterDrawer: filterDrawerReducer
  },
});
