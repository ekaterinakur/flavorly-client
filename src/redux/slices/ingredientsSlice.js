import { createSlice } from '@reduxjs/toolkit';
import { INGREDIENTS_LIST } from '../../mocks/ingredients.js';

const initialState = {
  items: INGREDIENTS_LIST,
  loading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: initialState,
  reducers: {
    changeIngredient(state, { payload }) {
      state.name = payload;
    },
  },
  extraReducers: () => {},
});

// Actions generator
export const { changeIngredient } = ingredientsSlice.actions;

// Selector
export const getIngredients = (state) => state.ingredients.items;
export const selectIngredient = (state) => state.ingredients.name;

// Reducer
export const ingredientsReducer = ingredientsSlice.reducer;
