import { createSelector } from '@reduxjs/toolkit';

export const selectRecipesPagination = createSelector(
  [(state) => state.recipes],
  (recipesState) => {
    const perPageLimit = 9;
    const total = recipesState.total || 0;
    const currentPage = recipesState.page || 1;
    const totalPages = Math.ceil(total / perPageLimit);
    return {
      currentPage,
      total,
      perPageLimit,
      totalPages,
    };
  }
);
