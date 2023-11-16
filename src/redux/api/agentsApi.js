// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const agentsApi = createApi({
  reducerPath: "agentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  tagTypes: ["usersApi"],
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (user) => ({
    //     url: `login`,
    //     method: `POST`,
    //     body: user,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
    getAllAgents: builder.query({
      query: (token) => ({
        url: `/users`,
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["usersApi"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAgentsQuery } = agentsApi;
