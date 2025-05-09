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
  async (recipeData, thunkAPI) => {
    try {
      const { data } = await axios.post('/recipes', recipeData);
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

export const fetchMyRecipes = createAsyncThunk(
  'recipes/fetchMyRecipes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/recipes/my');
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
      const { data } = await axios.post(`/recipes/${id}/favorite`);
      return data;
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
