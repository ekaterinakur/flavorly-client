import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const userFollowing = createAsyncThunk(
  'users/following',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.get('/users/following');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
