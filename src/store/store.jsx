import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import boughtProductsReducer from "./boughtProductsSlice";

import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducers = combineReducers({
    products: productsReducer,
    boughtProducts: boughtProductsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['boughtProducts'],
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store;

