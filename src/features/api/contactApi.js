import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const contactApi = createApi({
    reducerPath: 'contactApi',
     baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api/v1/",
     }),
     tagTypes: ["Contact"],
     endpoints: builder => ({
       
        getContacts: builder.query({
            query: (token) => ({
                url: '/contact',
                headers : {authorization: `Bearer ${token}`},
            }),
            providesTags:['Contact']

        }),
        deleteContact: builder.mutation({
            query: ({id,token}) => ({
                url: `/contact/${id}`,
                method: 'DELETE',
                body: id,
                headers : {authorization: `Bearer ${token}`},
            }),
            invalidatesTags: ['Contact']
        }),
        createContact: builder.mutation({
            query: ({contact,token}) => ({
                url: `/contact/`,
                method: 'POST',
                body: contact,
                headers : {authorization: `Bearer ${token}`},
            }),
            invalidatesTags: ['Contact']
        })



     })
})

export const {useGetContactsQuery, useDeleteContactMutation, useCreateContactMutation} = contactApi;