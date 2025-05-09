import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const userFollowers = createAsyncThunk(
  'users/followers',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await client.get(`/users/${userId}/followers`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
