import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';
import { handleThunkError } from '../utils/apiHandlerError.js';

export const subscribeToUser = createAsyncThunk(
  'users/subscribe',
  async (userId, { rejectWithValue }) => {
    try {
      await client.post(`/users/${userId}/follow`);

      return userId;
    } catch (error) {
      return handleThunkError(error, { rejectWithValue });
    }
  }
);
