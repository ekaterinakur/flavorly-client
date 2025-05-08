import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const fetchTestimonials = createAsyncThunk(
  'testimonials/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await client.get('/testimonials');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
