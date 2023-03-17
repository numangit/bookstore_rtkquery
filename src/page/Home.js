import React from 'react';
import BookContainer from '../components/home/BookContainer';
import BookFilter from '../components/home/BookFilter';

const Home = () => {
    return (
        <main className="py-12 px-6 2xl:px-6 container">
            <div className="order-2 xl:-order-1">
                <BookFilter />
                <BookContainer />
            </div>
        </main>
    );
};

export default Home;