import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = (state) => state.categories.loading;
export const selectCategories = (state) => state.categories.items;
export const selectCategoryOptions = createSelector(
  [selectCategories],
  (items) => items.map((item) => ({ label: item.name, value: item.name }))
);
