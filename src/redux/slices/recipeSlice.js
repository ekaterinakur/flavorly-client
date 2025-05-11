import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecipeById,
  addToFavorites,
  removeFromFavorites,
} from '../../api/recipes';

const initialState = {
  current: null,
  loading: false,
  error: null,
};

// Need to revrite with modern API syntacs; invalidate lists on changes
const recipeSlice = createSlice({
  name: 'recipe',
  initialState: initialState,
  reducers: {
    clearCurrentRecipe(state) {
      state.current = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.current = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addToFavorites.fulfilled, (state, action) => {
        if (state.current?.id === action.payload) {
          state.current = { ...state.current, isFavorite: true };
        }
      })

      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        if (state.current?.id === action.payload) {
          state.current = { ...state.current, isFavorite: false };
        }
      });
  },
});

export const { clearCurrentRecipe } = recipeSlice.actions;
export const recipeReducer = recipeSlice.reducer;
