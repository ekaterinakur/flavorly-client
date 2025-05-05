import { configureStore } from '@reduxjs/toolkit';
import { recipesReducer } from './slices/recipesSlice.js';
import { testimonialsReducer } from './slices/testimonialsSlice.js';
import { ingredientsReducer } from './slices/ingredientsSlice.js';
import { areasReducer } from './slices/areasSlice.js';
import userReducer from './slices/userSlice.js';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    testimonials: testimonialsReducer,
    ingredients: ingredientsReducer,
    areas: areasReducer,
    user: userReducer,
    // TODO: add needed reducers here
  },
});
