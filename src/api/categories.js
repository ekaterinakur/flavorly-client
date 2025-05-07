import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/categories');
      const categories = response.data;

      // Temp images
      const categoriesWithImages = categories.map((cat, index) => ({
        ...cat,
        imageUrl: `https://picsum.photos/400/305?random=${index + 1}`,
      }));

      return categoriesWithImages;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
