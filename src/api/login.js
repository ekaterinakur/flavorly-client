import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const loginUser = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', userData);

      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
