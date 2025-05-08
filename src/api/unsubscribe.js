import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const unsubscribeFromUser = createAsyncThunk(
  'users/unsubscribe',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await client.delete(`/users/${userId}/follow`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
