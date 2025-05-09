import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../../api/categories.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
  selected: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    changeCategory(state, { payload }) {
      state.selected = payload;
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

// Actions generator
export const { changeCategory } = categoriesSlice.actions;

// Reducer
export const categoriesReducer = categoriesSlice.reducer;
