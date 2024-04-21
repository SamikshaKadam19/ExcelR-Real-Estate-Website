import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/Signup';
import Appartment from './Apartment/Apartment';
import Banglow from './Banglow/Banglow';
import Cabin from './Cabin/Cabin';
import Villas from './Villas/Villas';
import Forgotpass from './Login/Forgotpass';
import Wishlist from './Wishlist/Wishlist';
import Hero from './Components/Hero';
import UserDashboard from './UserDashboard/UserDashboard';
import BrokerDashboard from './BrokerDashboard/Brokerdashboard';
import Home from './Home/Home';
import LoginBroker from './Login/LoginBroker';
import SignupBroker from './SignUp/SignupBroker';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Hero/>,
},
{
  path:'/App',
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
    path:'/SignUpBroker',
    element:<SignupBroker/>
},
  {
    path:'Login/Appartment',

    path:'/LoginBroker',
    element:<LoginBroker/>
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
  },
  {
     path:'/Forgotpass',
     element:<Forgotpass/>
  },
  {
     path:'/Wishlist',
     element:<Wishlist/>
  },
  {
    path:'/dashboard',
    element:<UserDashboard/>
 },
 {
  path:'/wishlist',
  element:<Wishlist/>
},
 {
  path:'/broker-dashboard',
  element:<BrokerDashboard/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
<RouterProvider router={router}/>
</>
);


