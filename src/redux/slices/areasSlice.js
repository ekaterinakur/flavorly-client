import { createSlice } from '@reduxjs/toolkit';
import { AREAS_LIST } from '../../mocks/areas.js';

const initialState = {
  items: AREAS_LIST,
  loading: false,
  error: null,
};

const areasSlice = createSlice({
  name: 'areas',
  initialState: initialState,
  reducers: {
    changeArea(state, { payload }) {
      state.name = payload;
    },
  },
  extraReducers: () => {},
});

// Actions generator
export const { changeArea } = areasSlice.actions;

// Selector
export const selectArea = (state) => state.areas.name;
export const getAreas = (state) => state.areas.items;

// Reducer
export const areasReducer = areasSlice.reducer;
