import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import Cookies from "js-cookie";

const token = Cookies.get("token");


export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api/v1",
    }),
    tagTypes:["Product"],
    endpoints: (builder) => ({
        getProducts:builder.query({
            query: ()=>({
                url:"/contact",
                headers: {authorization: `Bearer ${token}`},

            }),
        providesTags:["Product"]
        })
    })
})

export const {  useGetProdutctsQuery } = productApi;