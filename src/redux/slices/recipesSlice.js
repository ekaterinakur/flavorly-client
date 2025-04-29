import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
}; // TODO: add initial state properties

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {},
  extraReducers: () => {},
});

export const recipesReducer = recipesSlice.reducer;
