import React from 'react';
import { useGetBooksQuery } from '../../features/api/apiSlice';
import BookCard from './BookCard';

const BookContainer = () => {
    const { data: books, isLoading, isError, error } = useGetBooksQuery();

    let content = null;

    if (isLoading) content = <h1>Loading...</h1>;
    if (!isLoading && isError) content = <h1>{error}</h1>;
    if (!isLoading && !isError && books?.length === 0) content = <h1>No Results Found!</h1>;
    if (!isLoading && !isError && books?.length > 0) {
        content = books?.map(book => <BookCard key={book.id} book={book} />)
    }

    return (
        <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {content}
        </div>
    );
};

export default BookContainer;