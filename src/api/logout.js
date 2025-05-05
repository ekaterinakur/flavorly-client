import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/logout');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
