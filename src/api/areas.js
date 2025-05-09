import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';

export const fetchAreas = createAsyncThunk(
  'areas/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await client.get('/areas');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
