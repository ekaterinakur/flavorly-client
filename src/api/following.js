import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const userFollowing = createAsyncThunk(
  'users/following',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/following`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
