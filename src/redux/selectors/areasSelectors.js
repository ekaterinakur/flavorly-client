import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = (state) => state.areas.loading;
export const selectAreas = (state) => state.areas.items;
export const selectAreaOptions = createSelector(
  [selectAreas],
  (items) => items.map((item) => ({ label: item.name, value: item.name }))
);
