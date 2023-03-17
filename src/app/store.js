import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import filterReducer from '../features/filterSlice';
export const store = configureStore({
  reducer: {
    //WHY IN ARRAY?
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
