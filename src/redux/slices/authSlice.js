import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../../api/register';
import { loginUser } from '../../api/login';
import { logoutUser } from '../../api/logout';
import { currentUser } from '../../api/current';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  message: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addRecipeToFavorites(state, action) {
      if (!state.user.favoriteRecipes.includes(action.payload)) {
        state.user.favoriteRecipes.push(action.payload);
      }
    },
    removeRecipeFromFavorites(state, action) {
      state.user.favoriteRecipes = state.user.favoriteRecipes.filter(
        (recipeId) => recipeId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        };
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.message = action.payload.message;
        state.isLoggedIn = false;
        state.isLoading = false;
        localStorage.removeItem('persist:auth');
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Current
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { addRecipeToFavorites, removeRecipeFromFavorites } =
  authSlice.actions;
