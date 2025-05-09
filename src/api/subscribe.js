import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const subscribeToUser = createAsyncThunk(
  'users/subscribe',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await client.post(`/users/${userId}/follow`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
