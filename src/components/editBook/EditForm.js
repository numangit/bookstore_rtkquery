import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditBookMutation } from '../../features/api/apiSlice';

const EditForm = ({ selectedBook }) => {
    const navigate = useNavigate();
    const { id } = selectedBook;
    const [editBook, { isLoading, isError }] = useEditBookMutation();

    //controlled input states
    const [name, setName] = useState(selectedBook.name);
    const [author, setAuthor] = useState(selectedBook.author);
    const [thumbnail, setThumbnail] = useState(selectedBook.thumbnail);
    const [price, setPrice] = useState(selectedBook.price);
    const [rating, setRating] = useState(selectedBook.rating);
    const [featured, setFeatured] = useState(selectedBook.featured);

    //updated book input data
    const updatedBook = { name, author, thumbnail, price, rating, featured };

    //function handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updatedBook);
        editBook({ id, updatedBook });
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input required className="text-input" type="text" id="lws-bookName" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input required className="text-input" type="text" id="lws-author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input required className="text-input" type="number" id="lws-price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input required className="text-input" type="number" id="lws-rating" name="rating" min="1" max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
                </div>
            </div>

            <div className="flex items-center">
                <input id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
                <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button disabled={isLoading} type="submit" className="submit" id="lws-submit">Edit Book</button>

            {
                isError && <h1 style={{ color: 'red' }}>There was an Error</h1>
            }
        </form>
    );
};

export default EditForm;