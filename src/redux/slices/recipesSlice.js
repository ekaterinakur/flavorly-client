import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecipes,
  addToFavorites,
  removeFromFavorites,
} from '../../api/recipes';

const initialState = {
  items: [],
  total: 0,
  page: 1,
  category: '',
  area: '',
  ingredients: '',
  loading: false,
  error: null,
};

// Need to revrite with modern API syntacs; invalidate lists on changes
const recipesSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    setRecipesPage(state, action) {
      state.page = action.payload;
    },
    setSelectedCategory(state, action) {
      state.category = action.payload;
      state.page = 1;
    },
    setSelectedArea(state, action) {
      state.area = action.payload;
      state.page = 1;
    },
    setSelectedIngredients(state, action) {
      state.ingredients = action.payload;
      state.page = 1;
    },
    clearFilters(state) {
      state.category = '';
      state.area = '';
      state.ingredients = '';
      state.page = 1;
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
        state.loading = false;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
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

export const {
  setRecipesPage,
  setSelectedCategory,
  setSelectedArea,
  setSelectedIngredients,
  clearFilters,
} = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
