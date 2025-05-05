import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignUpOpen: false,
  isSignInOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignUpModal(state) {
      state.isSignUpOpen = true;
    },
    closeSignUpModal(state) {
      state.isSignUpOpen = false;
    },
    openSignInModal(state) {
      state.isSignInOpen = true;
    },
    closeSignInModal(state) {
      state.isSignInOpen = false;
    },
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,
  openSignInModal,
  closeSignInModal,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
