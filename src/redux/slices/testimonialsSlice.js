import { createSlice } from '@reduxjs/toolkit';
import { testimonials } from '../../mocks/testimonials.js';

const initialState = {
  items: testimonials,
  loading: false,
  error: null,
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: initialState,
  reducers: {},
  extraReducers: () => {},
});

export const testimonialsReducer = testimonialsSlice.reducer;
