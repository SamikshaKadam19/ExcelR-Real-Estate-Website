import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/Signup';

const router = createBrowserRouter([
  {
      path:'/',
      element:<Home/>
  },
  {
      path:'/Login',
      element:<Login/>
  },
  {
      path:'/SignUp',
      element:<SignUp/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<RouterProvider router={router}/>
</>
);


