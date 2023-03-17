import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    tagTypes: ["Books", "Book"],
    //(builder) => ({}), why not (builder) => {}. because returned in one line.
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({ url: "/books" }),
            providesTags: ["Books"]
        }),
        getBook: builder.query({
            query: (id) => ({ url: `/books/${id}` }),
            providesTags: ["Book"]
        }),
        addBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Books"]
        }),
        editBook: builder.mutation({
            query: ({ id, updatedBook }) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: updatedBook
            }),
            invalidatesTags: (result, error, arg) => ["Books", { type: 'Book', id: arg.id }]
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Books"]
        })
    }),
});

export const {
    useGetBooksQuery,
    useGetBookQuery,
    useAddBookMutation,
    useEditBookMutation,
    useDeleteBookMutation } = apiSlice;