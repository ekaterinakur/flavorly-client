import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const loginUser = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await client.post('/users/login', userData);

      return response.data.result;
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        }
        if (typeof error.response.data === 'string') {
          return rejectWithValue(error.response.data);
        }
      }
      return rejectWithValue(error.message);
    }
  }
);
