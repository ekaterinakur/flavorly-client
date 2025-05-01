import { configureStore } from '@reduxjs/toolkit';
import { recipesReducer } from './slices/recipesSlice.js';
import { testimonialsReducer } from './slices/testimonialsSlice.js';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    testimonials: testimonialsReducer,
    // TODO: add needed reducers here
  },
});
