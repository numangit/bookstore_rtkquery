import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    //(builder) => ({}), why not (builder) => {}
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({ url: "/books" }),
        }),
        getBook: builder.query({
            query: (id) => ({ url: `/books/${id}` })
        }),
        addBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: 'POST',
                body: data
            })
        }),
        editBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: data
            })
        })
    }),
});

export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation, useEditBookMutation } = apiSlice;