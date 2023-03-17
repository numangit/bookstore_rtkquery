import React from 'react';
import EditForm from '../components/editBook/EditForm';

const EditBook = () => {
    return (
        <main class="py-6 2xl:px-6">
            <div class="container">
                <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                    <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
                    <EditForm />
                </div>
            </div>
        </main>
    );
};

export default EditBook;