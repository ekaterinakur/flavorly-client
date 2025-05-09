import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const loginUser = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await client.post('/users/login', userData);

      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
