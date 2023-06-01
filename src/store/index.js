import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import gameModalReducer from "./slices/gameModalSlice";
import gameLinkSharingModalReducer from "./slices/gameLinkSharingModalSlice";


export const store = configureStore({
  reducer: {
    game: gameReducer,
    gameModal: gameModalReducer,
    gameLinkSharingModal: gameLinkSharingModalReducer
  },
});
