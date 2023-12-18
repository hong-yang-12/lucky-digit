// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const saleApi = createApi({
  reducerPath: "saleApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),//for server breakdown
  baseQuery: fetchBaseQuery({ baseUrl: "https://ld.sankyitar.store/api/v1/" }),

  tagTypes: ["saleApi"],
  endpoints: (builder) => ({
    getBanNumber: builder.query({
      query: (token) => ({
        url: `/ban-numbers`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["saleApi"],
    }),
    storeBanNumber: builder.mutation({
      query: ({ number, token }) => ({
        url: `/ban-numbers`,
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
        body: number,
      }),
      invalidatesTags: ["agentsApi"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBanNumberQuery, useStoreBanNumberMutation } = saleApi;
