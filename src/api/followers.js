import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const userFollowers = createAsyncThunk(
  'users/followers',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users/${userId}/followers`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
