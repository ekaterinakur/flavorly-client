import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSignUpOpen: false,
  isSignInOpen: false,
  isLogoutOpen: false,
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
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
