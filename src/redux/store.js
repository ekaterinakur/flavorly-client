import { configureStore } from '@reduxjs/toolkit';
import { recipesReducer } from './slices/recipesSlice.js';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    // TODO: add needed reducers here
  },
});
