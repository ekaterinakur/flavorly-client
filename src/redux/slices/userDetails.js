import { createSlice } from '@reduxjs/toolkit';
import { userDetails } from '../../api/userDetails';
import {
  createRecipe,
  deleteRecipe,
  addToFavorites,
  removeFromFavorites,
} from '../../api/recipes';
import { updateUserAvatar } from '../../api/avatar';
import { subscribeToUser } from '../../api/subscribe';
import { unsubscribeFromUser } from '../../api/unsubscribe';

const initialState = {
  user: null,
  isLoading: false,
  isUploadingAvatar: false,
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
      .addCase(updateUserAvatar.pending, (state) => {
        state.isUploadingAvatar = true;
      })
      .addCase(updateUserAvatar.fulfilled, (state, action) => {
        state.isUploadingAvatar = false;
        state.user.avatar = action.payload.user.avatar;
      })
      .addCase(updateUserAvatar.rejected, (state) => {
        state.isUploadingAvatar = false;
      })
      .addCase(createRecipe.fulfilled, (state) => {
        if (state.user) {
          state.user.addedRecipes += 1;
        }
      })

      .addCase(deleteRecipe.fulfilled, (state) => {
        if (state.user) {
          state.user.addedRecipes -= 1;
        }
      })

      .addCase(addToFavorites.fulfilled, (state) => {
        if (state.user) {
          state.user.favoriteRecipes += 1;
        }
      })

      .addCase(removeFromFavorites.fulfilled, (state) => {
        if (state.user) {
          state.user.favoriteRecipes -= 1;
        }
      })

      .addCase(subscribeToUser.fulfilled, (state) => {
        if (state.user) {
          state.user.following += 1;
        }
      })
      .addCase(unsubscribeFromUser.fulfilled, (state) => {
        if (state.user) {
          state.user.following -= 1;
        }
      });
  },
});

export const userDetailsReducer = userDetailsSlice.reducer;
