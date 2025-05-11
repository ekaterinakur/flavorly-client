import { createSlice } from '@reduxjs/toolkit';
import { userDetails } from '../../api/userDetails';
import {
  createRecipe,
  deleteRecipe,
  addToFavorites,
  removeFromFavorites,
} from '../../api/recipes';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userDetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(createRecipe.fulfilled, (state) => {
        state.user.addedRecipes += 1;
      })

      .addCase(deleteRecipe.fulfilled, (state) => {
        state.user.addedRecipes -= 1;
      })

      .addCase(addToFavorites.fulfilled, (state) => {
        state.user.favoriteRecipes += 1;
      })

      .addCase(removeFromFavorites.fulfilled, (state) => {
        state.user.favoriteRecipes -= 1;
      });
  },
});

export const userDetailsReducer = userDetailsSlice.reducer;
