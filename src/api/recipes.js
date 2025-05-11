import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/client.js';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/recipes', { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/recipes/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPopularRecipes = createAsyncThunk(
  'recipes/fetchPopular',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/recipes/popular', { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createRecipe = createAsyncThunk(
  'recipes/create',
  async (data, thunkAPI) => {
    const formData = new FormData();

    formData.append('thumb', data.thumb);

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('instructions', data.instructions);
    formData.append('time', data.time);
    formData.append('category', data.category);
    formData.append('area', data.area);

    formData.append('ingredients', JSON.stringify(data.ingredients));

    try {
      const { data } = await axios.post('/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  'recipes/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/recipes/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserRecipes = createAsyncThunk(
  'recipes/fetchUserRecipes',
  async ({ userId, page = 1, limit = 9 }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/recipes/user/${userId}`, {
        params: { page, limit },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'recipes/addToFavorites',
  async (id, thunkAPI) => {
    try {
      await axios.post(`/recipes/${id}/favorite`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'recipes/removeFromFavorites',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/recipes/${id}/favorite`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteRecipes = createAsyncThunk(
  'recipes/fetchFavorites',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/recipes/favorites', { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
