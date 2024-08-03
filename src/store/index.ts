import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stockCryptoReducer, { StockCryptoState } from "./stockCryptoSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  stockCrypto: stockCryptoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);

export type RootState = { stockCrypto: StockCryptoState };
export type AppDispatch = typeof store.dispatch;