import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import SearchForm from './SearchForm';

const Navbar = () => {
    return (
        <nav class="py-4 2xl:px-6">
            <div class="container flex items-center justify-between">
                <img src={logo} width="150px" class="object-contain" alt="logo" />

                <ul class="hidden md:flex items-center space-x-6">
                    <Link to='/' class="font-semibold cursor-pointer" id="lws-bookStore">
                        <li>Book Store</li>
                    </Link>
                    <Link to='/addBook' class="cursor-pointer" id="lws-addBook">
                        <li>Add Book</li>
                    </Link>
                </ul>
                <SearchForm />
            </div>
        </nav>
    );
};

export default Navbar;