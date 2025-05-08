import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const fetchUserDetails = createAsyncThunk(
  'users/fetchDetails',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users/${userId}/details`);
      return response.data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
