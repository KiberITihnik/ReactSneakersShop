import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/constants';
import { buildUrl } from '../../utils/common';

export const sneakersApiSlice = createApi({
    reducerPath: 'sneakersApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
    endpoints: (builder) => ({
        getCard: builder.query({
            query: (params) => buildUrl('/sneakers/', params),
            providesTags: ['sneakers'],
        }),
    }),
});

export const { useGetCardQuery } = sneakersApiSlice;
