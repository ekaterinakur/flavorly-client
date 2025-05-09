import { configureStore } from '@reduxjs/toolkit';
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

import { recipesReducer } from './slices/recipesSlice.js';
import { testimonialsReducer } from './slices/testimonialsSlice.js';
import { ingredientsReducer } from './slices/ingredientsSlice.js';
import { areasReducer } from './slices/areasSlice.js';
import { authReducer } from './slices/authSlice.js';
import { modalReducer } from './slices/modalSlice.js';
import { userDetailsReducer } from './slices/userDetails.js';
import { subscriptionsReducer } from './slices/subscriptionsSlice.js';
import { categoriesReducer } from './slices/categoriesSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    testimonials: testimonialsReducer,
    ingredients: ingredientsReducer,
    areas: areasReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    details: userDetailsReducer,
    subscriptions: subscriptionsReducer,
    categories: categoriesReducer,
    // TODO: add needed reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
