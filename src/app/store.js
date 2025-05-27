import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { routineApi } from "./service/apiData";

export const store = configureStore({
  reducer: {
    [routineApi.reducerPath]: routineApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routineApi.middleware),
});

setupListeners(store.dispatch);
