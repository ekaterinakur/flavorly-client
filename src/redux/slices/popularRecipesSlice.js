import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPopularRecipes,
  addToFavorites,
  removeFromFavorites,
} from '../../api/recipes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

// Need to revrite with modern API syntacs; invalidate lists on changes
const popularRecipesSlice = createSlice({
  name: 'popularRecipes',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularRecipes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPopularRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.items = state.items.map((r) =>
          r.id === action.payload ? { ...r, isFavorite: true } : r
        );
      })

      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.items = state.items.map((r) =>
          r.id === action.payload ? { ...r, isFavorite: false } : r
        );
      });
  },
});

export const popularRecipesReducer = popularRecipesSlice.reducer;
