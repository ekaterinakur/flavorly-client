import { createSlice } from '@reduxjs/toolkit';
import { subscribeToUser } from '../../api/subscribe';
import { unsubscribeFromUser } from '../../api/unsubscribe';
import { userFollowers } from '../../api/followers';
import { userFollowing } from '../../api/following';

const initialState = {
  followers: [],
  following: [],
  isLoading: false,
  error: null,
  message: null,
};

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Followers
      .addCase(userFollowing.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userFollowing.fulfilled, (state, action) => {
        state.isLoading = false;
        state.following = action.payload.following;
      })
      .addCase(userFollowing.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Following
      .addCase(userFollowers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userFollowers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.followers = action.payload.followers;
      })
      .addCase(userFollowers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Subscribe
      .addCase(subscribeToUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(subscribeToUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(subscribeToUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Unsubscribe
      .addCase(unsubscribeFromUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(unsubscribeFromUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(unsubscribeFromUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const subscriptionsReducer = subscriptionsSlice.reducer;
