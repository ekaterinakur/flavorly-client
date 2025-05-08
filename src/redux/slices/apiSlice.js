import { createApi } from '@reduxjs/toolkit/query/react';
import axiosInstance from '../../config/client';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ axiosInstance }),
  endpoints: (builder) => ({
    addRecipeToFavorite: builder.mutation({
      query: (recipeId) => ({
        url: `/recipes/${recipeId}/favorite`,
        method: 'POST',
      }),
    }),
    removeRecipeFromFavorite: builder.mutation({
      query: (recipeId) => ({
        url: `/recipes/${recipeId}/favorite`,
        method: 'DELETE',
      }),
    }),
    getPopularRecipes: builder.query({
      query: () => ({
        url: `/recipes/popular?limit=4`,
      }),
    }),
    getRecipe: builder.query({
      query: (recipeId) => ({
        url: `/recipes/${recipeId}`,
      }),
    }),
  }),
});

export const {
  useAddRecipeToFavoriteMutation,
  useGetPopularRecipesQuery,
  useGetRecipeQuery,
  useRemoveRecipeFromFavoriteMutation,
} = apiSlice;

function axiosBaseQuery({ axiosInstance }) {
  return async function ({ url, method, data, params }) {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError.response;
      return {
        error: {
          status: err?.status || 500,
          data: err?.data || err?.statusText || 'Unknown error',
        },
      };
    }
  };
}
