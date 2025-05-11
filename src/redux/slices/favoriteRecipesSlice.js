import { createSlice } from '@reduxjs/toolkit';
import { addToFavorites, fetchFavoriteRecipes, removeFromFavorites } from '../../api/recipes';

const initialState = {
  items: [],
  total: 0,
  page: 1,
  loading: false,
  error: null,
};

// Need to revrite with modern API syntacs; invalidate lists on changes
const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: initialState,
  reducers: {
    setFavoriteRecipesPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteRecipes.fulfilled, (state, action) => {
        state.items = action.payload.favorites;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchFavoriteRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.items = state.items.filter((r) => r.id !== action.payload);
        state.total = Math.max(0, state.total - 1);
      
        if (state.items.length === 0 && state.page > 1) {
          state.page -= 1;
        }
      });
  },
});

export const { setFavoriteRecipesPage } = favoriteRecipesSlice.actions;
export const favoriteRecipesReducer = favoriteRecipesSlice.reducer;
