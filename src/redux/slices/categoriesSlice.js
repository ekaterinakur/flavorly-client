import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../../api/categories.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
  selectedCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory(state) {
      state.selectedCategory = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedCategory, clearSelectedCategory } =
  categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
