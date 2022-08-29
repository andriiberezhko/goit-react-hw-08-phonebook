import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/auth-slice';
import { dataSlice } from './dataSlice';
import { contactsSlice } from './contacts/contacts-slice';
// import { contactsApi } from 'services/contactsApi';
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

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    filter: dataSlice.reducer,
    contacts: contactsSlice.reducer,
    auth: persistReducer(persistConfig, authSlice.reducer),
    // auth: authSlice.reducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
