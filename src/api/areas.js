import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const fetchAreas = createAsyncThunk(
  'areas/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/areas');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
