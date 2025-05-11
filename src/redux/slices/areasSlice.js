import { createSlice } from '@reduxjs/toolkit';
import { fetchAreas } from '../../api/areas.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const areasSlice = createSlice({
  name: 'areas',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAreas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAreas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Reducer
export const areasReducer = areasSlice.reducer;
