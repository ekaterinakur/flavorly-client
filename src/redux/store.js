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
import { recipeReducer } from './slices/recipeSlice.js';
import { favoriteRecipesReducer } from './slices/favoriteRecipesSlice.js';
import { userRecipesReducer } from './slices/userRecipesSlice.js';
import { popularRecipesReducer } from './slices/popularRecipesSlice.js';
import { testimonialsReducer } from './slices/testimonialsSlice.js';
import { ingredientsReducer } from './slices/ingredientsSlice.js';
import { areasReducer } from './slices/areasSlice.js';
import { categoriesReducer } from './slices/categoriesSlice.js';
import { authReducer } from './slices/authSlice.js';
import { modalReducer } from './slices/modalSlice.js';
import { userDetailsReducer } from './slices/userDetails.js';
import { subscriptionsReducer } from './slices/subscriptionsSlice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    recipe: recipeReducer,
    favoriteRecipes: favoriteRecipesReducer,
    userRecipes: userRecipesReducer,
    popularRecipes: popularRecipesReducer,
    testimonials: testimonialsReducer,
    ingredients: ingredientsReducer,
    areas: areasReducer,
    categories: categoriesReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    modal: modalReducer,
    details: userDetailsReducer,
    subscriptions: subscriptionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
