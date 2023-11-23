// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  tagTypes: ["profileApi"],
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: ({ passwordForm, token }) => ({
        url: `/change-password`,
        method: `POST`,
        headers: { authorization: `Bearer ${token}` },
        body: passwordForm,
      }),
      invalidatesTags: ["profileApi"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useChangePasswordMutation } = profileApi;
