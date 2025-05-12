import { createSelector } from '@reduxjs/toolkit';
import {
  DEFAULT_PAGE_LIMIT,
  DEFAULT_MAIN_PAGE_LIMIT,
} from '../../utils/constants';

export const selectRecipes = (state) => state.recipes.items;
export const selectRecipesCategory = (state) => state.recipes.category;
export const selectRecipesArea = (state) => state.recipes.area;
export const selectRecipesIngredients = (state) => state.recipes.ingredients;
export const selectRecipesFilters = createSelector(
  [selectRecipesCategory, selectRecipesArea, selectRecipesIngredients],
  (category, area, ingredients) => {
    return { category, area, ingredients };
  }
);
export const selectRecipesPage = (state) => state.recipes.page;
export const selectRecipesTotal = (state) => state.recipes.total;
export const selectRecipesPagination = createSelector(
  [selectRecipesPage, selectRecipesTotal],
  (page, total) => {
    return {
      page: page || 1,
      totalPages: Math.ceil(total / DEFAULT_MAIN_PAGE_LIMIT),
    };
  }
);
export const selectRecipesLoading = (state) => state.recipes.loading;
export const selectRecipesError = (state) => state.recipes.error;

export const selectCurrentRecipe = (state) => state.recipe.current;
export const selectCurrentRecipeLoading = (state) => state.recipe.loading;
export const selectCurrentRecipeError = (state) => state.recipe.error;

export const selectPopularRecipes = (state) => state.popularRecipes.items;
export const selectPopularRecipesLoading = (state) =>
  state.popularRecipes.loading;
export const selectPopularRecipesError = (state) => state.popularRecipes.error;

export const selectUserRecipes = (state) => state.userRecipes.items;
export const selectUserRecipesPage = (state) => state.userRecipes.page;
export const selectUserRecipesTotal = (state) => state.userRecipes.total;
export const selectUserRecipesPagination = createSelector(
  [selectUserRecipesPage, selectUserRecipesTotal],
  (page, total) => {
    return {
      page: page || 1,
      totalPages: Math.ceil(total / DEFAULT_PAGE_LIMIT),
    };
  }
);
export const selectUserRecipesLoading = (state) => state.userRecipes.loading;
export const selectUserRecipesError = (state) => state.userRecipes.error;

export const selectFavoriteRecipes = (state) => state.favoriteRecipes.items;
export const selectFavoriteRecipesPage = (state) => state.favoriteRecipes.page;
export const selectFavoriteRecipesTotal = (state) =>
  state.favoriteRecipes.total;
export const selectFavoriteRecipesPagination = createSelector(
  [selectFavoriteRecipesPage, selectFavoriteRecipesTotal],
  (page, total) => {
    return {
      page: page || 1,
      totalPages: Math.ceil(total / DEFAULT_PAGE_LIMIT),
    };
  }
);
export const selectFavoriteRecipesLoading = (state) =>
  state.favoriteRecipes.loading;
export const selectFavoriteRecipesError = (state) =>
  state.favoriteRecipes.error;
