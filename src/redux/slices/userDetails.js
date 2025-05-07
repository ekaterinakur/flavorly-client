import { createSlice } from '@reduxjs/toolkit';
import { userDetails } from '../../api/userDetails';

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
      });
  },
});

export const userDetailsReducer = userDetailsSlice.reducer;
