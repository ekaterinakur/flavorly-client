import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecipes,
  fetchRecipeById,
  fetchPopularRecipes,
  createRecipe,
  deleteRecipe,
  fetchMyRecipes,
  addToFavorites,
  removeFromFavorites,
  fetchFavoriteRecipes,
} from '../../api/recipes';

const initialState = {
  items: [],
  current: null,
  popular: [],
  myRecipes: [],
  favorites: [],
  total: 0,
  page: 1,
  loading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    clearCurrentRecipe(state) {
      state.current = null;
    },
    setRecipesPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.items = action.payload.recipes;
        state.total = action.payload.total;
        state.page = action.payload.page;
        state.loading = false;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.current = action.payload;
      })

      .addCase(fetchPopularRecipes.fulfilled, (state, action) => {
        state.popular = action.payload || [];
      })

      .addCase(createRecipe.fulfilled, (state, action) => {
        state.myRecipes.push(action.payload);
      })

      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.myRecipes = state.myRecipes.filter(
          (r) => r.id !== action.payload
        );
      })

      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.myRecipes = action.payload.recipes || [];
        state.page = action.payload.page || 1;
        state.total = action.payload.total;
      })

      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })

      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (r) => r.id !== action.payload
        );
      })

      .addCase(fetchFavoriteRecipes.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites || [];
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
          state.error = false;
        }
      );
  },
});

export const { clearCurrentRecipe, setRecipesPage } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
