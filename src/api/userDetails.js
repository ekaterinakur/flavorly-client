import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const userDetails = createAsyncThunk(
  'users/details',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users/details/${userId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
