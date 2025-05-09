export const getApiErrorMessage = (error) => {
  if (error.response && error.response.data) {
    if (error.response.data.message) {
      return error.response.data.message;
    }
    if (typeof error.response.data === 'string') {
      return error.response.data;
    }
  }
  return error.message || 'An unexpected error occurred';
};

export const handleThunkError = (error, { rejectWithValue }) => {
  return rejectWithValue(getApiErrorMessage(error));
};
