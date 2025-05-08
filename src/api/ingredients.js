import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await client.get(
        'https://flavorly-api-gpdc.onrender.com/api/ingredients'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
