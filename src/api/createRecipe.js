import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const createRecipe = createAsyncThunk(
  'recipes/create',
  async (formData, thunkAPI) => {
    try {
      const response = await client.post('/recipes', formData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
