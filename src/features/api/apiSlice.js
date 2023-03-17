import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    tagTypes: ["books"],
    //(builder) => ({}), why not (builder) => {}
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({ url: "/books" }),
            providesTags: ["books"]
        }),
        getBook: builder.query({
            query: (id) => ({ url: `/books/${id}` })
        }),
        addBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["books"]
        }),
        editBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: data
            })
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            })
        })
    }),
});

export const {
    useGetBooksQuery,
    useGetBookQuery,
    useAddBookMutation,
    useEditBookMutation,
    useDeleteBookMutation } = apiSlice;