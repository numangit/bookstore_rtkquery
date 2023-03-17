import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddBook from "../page/AddBook";
import EditBook from "../page/EditBook";
import Home from "../page/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addBook',
                element: <AddBook />
            },
            {
                path: '/editBook/:id',
                element: <EditBook />
            }
        ]
    }
]) 