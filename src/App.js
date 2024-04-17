// App.js
import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './SignUp/Signup';
import Home from './Home/Home';
import Banglow from './Banglow/Banglow';
import Cabin from './Cabin/Cabin';
import Apartment from './Apartment/Apartment';
import Villas from './Villas/Villas';
import Like from './LikedPage/Like';
import Filter from './Filter/Filter';

import UserDashboard from './UserDashboard/UserDashboard';
import BrokerDashboard from './BrokerDashboard/Brokerdashboard'; // Import BrokerDashboard component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Add your authentication logic here
    console.log('Logging in with:', email, password);
    setIsLoggedIn(true);
  };

  const handleSignup = (email, password) => {
    // Add your signup logic here
    console.log('Signing up with:', email, password);
    setIsLoggedIn(true);
  };
  const handleSearch = (filters) => {
    // Handle search logic here
    console.log('Search filters:', filters);
  };
  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}> {/* Set height and overflow for scrolling */}
      <Filter onSearch={handleSearch} />
      <div>
        {isLoggedIn ? (
          <h1>Welcome! You are logged in.</h1>
        ) : (
          <div>
            <Login handleLogin={handleLogin} />
            <Signup handleSignup={handleSignup} />
          </div>
        )}
      </div>
      <Home/>
      <Login/>
      <Signup/>
      <Apartment/>
      <Banglow/>
      <Cabin/>
      <Villas/>
      <Like/>
    </div>
  );
};

export default App;
