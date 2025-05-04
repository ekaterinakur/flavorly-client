import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const registerUser = createAsyncThunk(
  'users/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/register', userData);
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
