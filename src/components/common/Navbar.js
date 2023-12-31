import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import SearchForm from './SearchForm';

const Navbar = () => {
    return (
        <nav className="py-4 2xl:px-6">
            <div className="container flex items-center justify-between">
                <img src={logo} width="150px" className="object-contain" alt="logo" />

                <ul className="hidden md:flex items-center space-x-6">
                    <Link to='/' className="font-semibold cursor-pointer" id="lws-bookStore">
                        <li>Book Store</li>
                    </Link>
                    <Link to='/addBook' className="cursor-pointer" id="lws-addBook">
                        <li>Add Book</li>
                    </Link>
                </ul>
                <SearchForm />
            </div>
        </nav>
    );
};

export default Navbar;