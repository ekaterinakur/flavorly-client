import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: null,
};

const selectedCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory(state) {
      state.selectedCategory = null;
    },
  },
});

export const { setSelectedCategory, clearSelectedCategory } =
  selectedCategorySlice.actions;
export const selectedCategoryReducer = selectedCategorySlice.reducer;
