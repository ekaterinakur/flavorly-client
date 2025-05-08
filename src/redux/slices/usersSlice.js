import { createSlice } from '@reduxjs/toolkit';
import { fetchUserDetails } from '../../api/user';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userDetails: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectUserById = (state) => state.users;

export default usersSlice.reducer;
