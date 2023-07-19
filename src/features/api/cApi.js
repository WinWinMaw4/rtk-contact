import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api/v1",
    }),
    tagTypes:["Contact"],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query:(token)=>({
                url:"/contact",
                headers: {authorization: `Bearer ${token}`},

            }),
            providesTags:["Contact"]
        })
    })
})

export const {useGetContactQuery} = contactApi;