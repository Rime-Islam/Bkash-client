import storage  from 'redux-persist/lib/storage';
import authReducer from '../features/Auth/authSlice'
import carReducer from '../features/Car/CarSlice'
import bookReducer from '../features/Book/BookSlice'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../features/Api/baseApi";



const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedAuthReducer,
        car: carReducer,
        book: bookReducer,
    },

   
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);