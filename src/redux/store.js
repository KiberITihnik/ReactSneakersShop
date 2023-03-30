import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/filterSlice';
import { sneakersApiSlice } from './api/sneakersApiSlice';

export const store = configureStore({
    reducer: {
        filter,
        [sneakersApiSlice.reducerPath]: sneakersApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sneakersApiSlice.middleware),
});
