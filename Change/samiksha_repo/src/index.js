import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/Signup';
import Appartment from './Apartment/Apartment';
import Banglow from './Banglow/Banglow';
import Cabin from './Cabin/Cabin';
import Villas from './Villas/Villas'

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
  },
  {
    path:'/Appartment',
    element:<Appartment/>
  }
  ,
  {
    path:'/Banglow',
    element:<Banglow/>
  }
  ,
  {
    path:'/Cabin',
    element:<Cabin/>
  }
  ,
  {
    path:'/Villas',
    element:<Villas/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<RouterProvider router={router}/>
</>
);


