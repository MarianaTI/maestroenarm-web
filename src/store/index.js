import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import gameReducer from "./slices/gameSlice";
import filterDrawerReducer from "./slices/filterDrawerSlice";
import navDrawerReducer from "./slices/navDrawerSlice";
import videosReducer from "./slices/videosSlice";
import productReducer from "./slices/productSlice";
import { videosApi } from "./apis/videoApi";
import CheckBoxMenuReducer from "./slices/menuCheckBoxSlice";

// Configuración de persistencia para cada reductor
const persistConfig = {
  key: 'root',
  storage,
};

// Persistimos cada reductor individualmente
const persistedGameReducer = persistReducer(persistConfig, gameReducer);
const persistedFilterDrawerReducer = persistReducer(persistConfig, filterDrawerReducer);
const persistedNavDrawerReducer = persistReducer(persistConfig, navDrawerReducer);
const persistedVideosReducer = persistReducer(persistConfig, videosReducer);
const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedCheckBoxMenuReducer = persistReducer(persistConfig, CheckBoxMenuReducer )

export const store = configureStore({
  reducer: {
    checkBoxMenu: persistedCheckBoxMenuReducer,
    game: persistedGameReducer,
    filterDrawer: persistedFilterDrawerReducer,
    navDrawer: persistedNavDrawerReducer,
    videos: persistedVideosReducer,
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
