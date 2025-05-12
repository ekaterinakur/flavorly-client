import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';
import { handleThunkError } from '../utils/apiHandlerError.js';

export const unsubscribeFromUser = createAsyncThunk(
  'users/unsubscribe',
  async (userId, { rejectWithValue }) => {
    try {
      await client.delete(`/users/${userId}/follow`);

      return userId;
    } catch (error) {
      return handleThunkError(error, { rejectWithValue });
    }
  }
);
