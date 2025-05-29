import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nameApi = createApi({
  reducerPath: "nameApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5002/v1/api" }),
  endpoints: (builder) => ({
    // get all names
    getAllNames: builder.query({
      query: () => "/names",
    }),

    // create a new name
    createName: builder.mutation({
        query: (newName) => ({
            url: "http://localhost:5002/v1/api/names",
            method: "POST",
            body: newName
        }),
        invalidatesTags: ['Name']
    })
  }),
});

export const { useGetAllNamesQuery, useCreateNameMutation } = nameApi;
