// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const agentsApi = createApi({
  reducerPath: "agentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
  // baseQuery: fetchBaseQuery({ baseUrl: "https://ld.sankyitar.store/api/v1/" }),
  tagTypes: ["agentsApi"],
  endpoints: (builder) => ({
    getAllAgents: builder.query({
      query: (token) => ({
        url: `agent`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["agentsApi"],
    }),
    storeBanAgent: builder.mutation({
      query: ({ id, token }) => ({
        url: `/agent/${id}`,
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["agentsApi"],
    }),
    unBanAgent: builder.mutation({
      query: ({ id, token }) => ({
        url: `/agent/${id}`,
        method: "DELETE",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["agentsApi"],
    }),
    getBanAgents: builder.query({
      query: (token) => ({
        url: `agent/bannedAgent`,
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      }),
      providesTags: ["agentsApi"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllAgentsQuery,
  useGetBanAgentsQuery,
  useStoreBanAgentMutation,
  useUnBanAgentMutation,
} = agentsApi;
