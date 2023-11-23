// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const sectionApi = createApi({
  reducerPath: "sectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  tagTypes: ["sectionApi"],
  endpoints: (builder) => ({
    createSection: builder.mutation({
      query: ({ section, token }) => ({
        url: `/section`,
        method: `POST`,
        headers: { authorization: `Bearer ${token}` },
        body: section,
      }),
      invalidatesTags: ["sectionApi"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateSectionMutation } = sectionApi;
