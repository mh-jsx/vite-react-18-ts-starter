import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rtkClient } from 'services/api';
import feature1Api from 'services/api/feature1/api';

import { authApi, authReducer } from 'auth/core';

import feature1 from './slices/feature1Slice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    feature1,
    feature1Api,
    auth: persistedAuthReducer,
    [rtkClient.reducerPath]: rtkClient.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([rtkClient.middleware, authApi.middleware]),
  devTools: import.meta.env.MODE !== 'production', // Enable DevTools in development
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
