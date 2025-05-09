import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = (state) => state.ingredients.loading;
export const selectIngredients = (state) => state.ingredients.items;
export const selectIngredientOptions = createSelector(
  [selectIngredients],
  (items) => items.map((item) => ({ label: item.name, value: item.id }))
);
