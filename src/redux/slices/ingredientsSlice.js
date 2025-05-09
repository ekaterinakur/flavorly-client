import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from '../../api/ingredients.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
  selected: '',
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: initialState,
  reducers: {
    changeIngredient(state, { payload }) {
      state.selected = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Actions generator
export const { changeIngredient } = ingredientsSlice.actions;

// Reducer
export const ingredientsReducer = ingredientsSlice.reducer;
