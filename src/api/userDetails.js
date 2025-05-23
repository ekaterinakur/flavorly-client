import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';
import { handleThunkError } from '../utils/apiHandlerError.js';

export const userDetails = createAsyncThunk(
  'users/details',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await client.get(`/users/${userId}/details`);

      return response.data;
    } catch (error) {
      return handleThunkError(error, { rejectWithValue });
    }
  }
);
