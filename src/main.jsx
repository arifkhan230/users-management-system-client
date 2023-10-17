import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './Home.jsx';
import AddUser from './AddUser';
import AllUsers from './AllUsers';
import UpdateUser from './UpdateUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/addUser',
        element:<AddUser />
      },{
        path:'/allUser',
        element:<AllUsers></AllUsers>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path:'/update/:id',
        element:<UpdateUser></UpdateUser>,
        loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
