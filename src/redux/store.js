import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./api/authApi";
import authSlice from "./service/authSlice";
import stateSlice from "./service/stateSlice";
import { agentsApi } from "./api/agentsApi";
import { usersApi } from "./api/usersApi";
import usersSlice from "./service/usersSlice";
import saleSlice from "./service/saleSlice";
import { saleApi } from "./api/saleApi";
import { profileApi } from "./api/profileApi";
import { recordApi } from "./api/recordApi";
import { sectionApi } from "./api/sectionApi";
import agentsSlice from "./service/agentsSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [agentsApi.reducerPath]: agentsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [saleApi.reducerPath]: saleApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [sectionApi.reducerPath]: sectionApi.reducer,
    [recordApi.reducerPath]: recordApi.reducer,

    authSlice: authSlice,
    stateSlice: stateSlice,
    usersSlice: usersSlice,
    agentsSlice: agentsSlice,
    saleSlice: saleSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      usersApi.middleware,
      agentsApi.middleware,
      saleApi.middleware,
      profileApi.middleware,
      sectionApi.middleware,
      recordApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
