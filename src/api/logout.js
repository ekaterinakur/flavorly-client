import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.post('/users/logout');

      return response.data;
    } catch (error) {
      if (error.resonse.data.message) {
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
