import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUserRecipes,
  deleteRecipe,
  addToFavorites,
  removeFromFavorites,
} from '../../api/recipes';

const initialState = {
  items: [],
  total: 0,
  page: 1,
  loading: false,
  error: null,
};

// Need to revrite with modern API syntacs; invalidate lists on changes
const userRecipesSlice = createSlice({
  name: 'userRecipes',
  initialState: initialState,
  reducers: {
    setUserRecipesPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserRecipes.fulfilled, (state, action) => {
        state.items = action.payload.recipes;
        state.total = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchUserRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.items = state.items.filter((r) => r.id !== action.payload);
        state.total = Math.max(0, state.total - 1);
      
        if (state.items.length === 0 && state.page > 1) {
          state.page -= 1;
        }
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

export const { setUserRecipesPage } = userRecipesSlice.actions;
export const userRecipesReducer = userRecipesSlice.reducer;
