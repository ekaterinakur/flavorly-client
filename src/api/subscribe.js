import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';
import { handleThunkError } from '../utils/ApiErrorHandler.js';

export const subscribeToUser = createAsyncThunk(
  'users/subscribe',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await client.post(`/users/${userId}/follow`);

      return response.data;
    } catch (error) {
      return handleThunkError(error, { rejectWithValue });
    }
  }
);
