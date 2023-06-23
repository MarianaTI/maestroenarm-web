import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import filterDrawerReducer from "./slices/filterDrawerSlice";
import navDrawerReducer from "./slices/navDrawerSlice";
import videosReducer from "./slices/videosSlice";


export const store = configureStore({
  reducer: {
    game: gameReducer,
    filterDrawer: filterDrawerReducer,
    navDrawer: navDrawerReducer,
    videos: videosReducer
  },
});
