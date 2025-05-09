import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/client.js';
import { handleThunkError } from '../utils/ApiErrorHandler.js';

export const updateUserAvatar = createAsyncThunk(
  'users/updateAvatar',
  async (avatarFile, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('avatar', avatarFile);

    try {
      const response = await client.patch('/users/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return handleThunkError(error, { rejectWithValue });
    }
  }
);
