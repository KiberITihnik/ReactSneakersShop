import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';

export const sneakersApiSlice = createApi({
    reducerPath: 'sneakersApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    endpoints: (builder) => ({
        getCard: builder.query({
            query: () => `sneakers/`,
        }),
    }),
});

export const { useGetCardQuery } = sneakersApiSlice;
