import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';
import { handleThunkError } from '../utils/ApiErrorHandler.js';


export const loginUser = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await client.post('/users/login', userData);

      return response.data.result;
    } catch (error) {
      return handleThunkError(error, { rejectWithValue });
    }
  }
);
