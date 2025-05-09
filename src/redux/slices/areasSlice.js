import { createSlice } from '@reduxjs/toolkit';
import { fetchAreas } from '../../api/areas.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
  selected: '',
};

const areasSlice = createSlice({
  name: 'areas',
  initialState: initialState,
  reducers: {
    changeArea(state, { payload }) {
      state.selected = payload;
    },
  },
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

// Actions generator
export const { changeArea } = areasSlice.actions;

// Reducer
export const areasReducer = areasSlice.reducer;
