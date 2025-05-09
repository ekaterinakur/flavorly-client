import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const userFollowing = createAsyncThunk(
  'users/following',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.get('/users/following');

      return response.data;
    } catch (error) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }

      if (typeof error.response.data === 'string') {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
