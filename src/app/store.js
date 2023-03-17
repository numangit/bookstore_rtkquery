import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    //WHY IN ARRAY?
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
