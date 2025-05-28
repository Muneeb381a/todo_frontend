import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { routineApi } from "./service/apiData";
import { nameApi } from "./service/nameData";

export const store = configureStore({
  reducer: {
    [routineApi.reducerPath]: routineApi.reducer,
    [nameApi.reducerPath]: nameApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
        .concat(routineApi.middleware)
        .concat(nameApi.middleware)
        ,
});

setupListeners(store.dispatch);
