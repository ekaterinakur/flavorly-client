import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const fetchTestimonials = createAsyncThunk(
  "testimonials/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/testimonials');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
