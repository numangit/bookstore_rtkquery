import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFeatured } from '../../features/filterSlice';

const BookFilter = () => {

    const filterState = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    //filter handler function
    const filterHandler = (selectedFiler) => {
        dispatch(setFeatured(selectedFiler));
    };

    return (
        <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
                <button
                    className={`lws-filter-btn ${filterState.isFeatured === false && "active-filter"}`}
                    onClick={() => filterHandler(false)}
                >
                    All
                </button>
                <button
                    className={`lws-filter-btn ${filterState.isFeatured === true && "active-filter"}`}
                    onClick={() => filterHandler(true)}
                >
                    Featured
                </button>
            </div>
        </div>
    );
};

export default BookFilter;