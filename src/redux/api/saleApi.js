// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const saleApi = createApi({
  reducerPath: "saleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  tagTypes: ["saleApi"],
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (user) => ({
    //     url: `login`,
    //     method: `POST`,
    //     body: user,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
    getBanNumber: builder.query({
      query: (token) => ({
        url: `/ban444-numbers`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["saleApi"],
    }),
    // getBanNumber: builder.query({
    //   query: () => ({
    //     url: `/ban-numbers`,
    //   }),
    //   providesTags: ["saleApi"],
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBanNumberQuery } = saleApi;
