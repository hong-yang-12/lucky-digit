// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  // baseQuery: fetchBaseQuery({ baseUrl: "https://ld.sankyitar.store/api/v1/" }),
  tagTypes: ["profileApi"],
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (token) => ({
        url: `profile`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["agentsApi"],
    }),
    changePassword: builder.mutation({
      query: ({ passwordForm, token }) => ({
        url: `profile/change-password`,
        method: `POST`,
        headers: { authorization: `Bearer ${token}` },
        body: passwordForm,
      }),
      invalidatesTags: ["profileApi"],
    }),
    editUserProfile: builder.mutation({
      query: ({ editForm, token }) => ({
        url: `profile/edit`,
        method: `PUT`,
        headers: { authorization: `Bearer ${token}` },
        body: editForm,
      }),
      invalidatesTags: ["profileApi"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useChangePasswordMutation,
  useGetUserProfileQuery,
  useEditUserProfileMutation,
} = profileApi;
