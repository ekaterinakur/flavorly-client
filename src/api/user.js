import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';
import toast from 'react-hot-toast';

export const fetchUserDetails = createAsyncThunk(
  'users/fetchDetails',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users/${userId}/details`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'users/avatar',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/users/avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.result;
    } catch (error) {
      toast.error('Помилка при завантаженні аватара.');
      return rejectWithValue(error.message);
    }
  }
);
