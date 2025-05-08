import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const registerUser = createAsyncThunk(
  'users/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await client.post('/users/register', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
