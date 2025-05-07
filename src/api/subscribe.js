import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const subscribeToUser = createAsyncThunk(
  'users/subscribe',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/${userId}/follow`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
