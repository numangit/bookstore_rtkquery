import React from 'react';
import { useParams } from 'react-router-dom';
import EditForm from '../components/editBook/EditForm';
import { useGetBookQuery } from '../features/api/apiSlice';

const EditBook = () => {
    const { bookId } = useParams();
    const { data: selectedBook, isLoading, isError } = useGetBookQuery(bookId);

    let content = null;

    if (isLoading) {
        content = <h1>Loading...</h1>;
    }
    if (!isLoading && isError) {
        content = <h1 style={{ color: 'red' }}>There is an Error</h1>;
    }
    if (!isLoading && !isError && selectedBook?.id) {
        content = <EditForm selectedBook={selectedBook} />;
    }

    return (
        <main className="py-6 2xl:px-6">
            <div className="container">
                <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                    {content}
                </div>
            </div>
        </main>
    );
};

export default EditBook;