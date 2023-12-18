// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const recordApi = createApi({
  reducerPath: "recordApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),//for server breakdown
  baseQuery: fetchBaseQuery({ baseUrl: "https://ld.sankyitar.store/api/v1/" }),
  tagTypes: ["recordApi"],
  endpoints: (builder) => ({
    getAllRecord: builder.query({
      query: (token) => ({
        url: `/record`,
        method: `GET`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["recordApi"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllRecordQuery } = recordApi;
