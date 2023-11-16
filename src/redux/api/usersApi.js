// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  tagTypes: ["usersApi"],
  endpoints: (builder) => ({
    getCurrentuser: builder.query({
      query: (token) => ({
        url: `/user`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["usersApi"],
    }),
    getAllusers: builder.query({
      query: (token) => ({
        url: `/users`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["usersApi"],
    }),
    banUser: builder.mutation({
      query: ({ id, token }) => ({
        url: `user-ban/${id}`,
        method: `POST`,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["usersApi"],
    }),
    unbanUser: builder.mutation({
      query: ({ id, token }) => ({
        url: `user-unban/${id}`,
        method: `POST`,
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["usersApi"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllusersQuery, useBanUserMutation,useUnbanUserMutation,useGetCurrentuserQuery } = usersApi;
