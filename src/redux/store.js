import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import { sneakersApiSlice } from './api/sneakersApiSlice';
import useReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        filter,
        user: useReducer,
        [sneakersApiSlice.reducerPath]: sneakersApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sneakersApiSlice.middleware),
});
