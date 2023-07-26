import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameReducer from "./slices/gameSlice";
import filterDrawerReducer from "./slices/filterDrawerSlice";
import navDrawerReducer from "./slices/navDrawerSlice";
import videosReducer from "./slices/videosSlice";
import productReducer from "./slices/productSlice";
import { videosApi } from "./apis/videoApi";
import CheckBoxMenuReducer from "./slices/menuCheckBoxSlice";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedProductReducer = persistReducer(persistConfig, productReducer);

export const store = configureStore({
  reducer: {
    checkBoxMenu: CheckBoxMenuReducer,
    game: gameReducer,
    filterDrawer: filterDrawerReducer,
    navDrawer: navDrawerReducer,
    videos: videosReducer,
    product: persistedProductReducer,
    [videosApi.reducerPath]: videosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(videosApi.middleware),
});

export const persistor = persistStore(store);
