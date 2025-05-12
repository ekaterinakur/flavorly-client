import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignUpOpen: false,
  isSignInOpen: false,
  isLogoutOpen: false,
  isAcceptionOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // Sign Up Modal Actions
    openSignUpModal(state) {
      state.isSignUpOpen = true;
    },
    closeSignUpModal(state) {
      state.isSignUpOpen = false;
    },

    // Acception Modal Actions
    openAcceptionModal(state) {
      state.isAcceptionOpen = true;
    },
    closeAcceptionModal(state) {
      state.isAcceptionOpen = false;
    },

    // Sign In Modal Actions
    openSignInModal(state) {
      state.isSignInOpen = true;
    },
    closeSignInModal(state) {
      state.isSignInOpen = false;
    },

    // Logout Modal Actions
    openLogoutModal(state) {
      state.isLogoutOpen = true;
    },
    closeLogoutModal(state) {
      state.isLogoutOpen = false;
    },
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,
  openSignInModal,
  closeSignInModal,
  openLogoutModal,
  closeLogoutModal,
  openAcceptionModal,
  closeAcceptionModal,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
