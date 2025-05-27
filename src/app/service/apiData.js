import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const routineApi = createApi({
    reducerPath: "routines",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5002/v1/api"}),
    endpoints: (builder) => ({
        // get all the routines

        getAllRoutines: builder.query({
            query: () => '/all-routines'
        })
    })
})

export const { useGetAllRoutinesQuery } = routineApi