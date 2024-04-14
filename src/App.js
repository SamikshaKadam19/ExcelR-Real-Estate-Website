import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Banglow from './Banglow/Banglow';
import Cabin from './Cabin/Cabin';
import Apartment from './Apartment/Apartment';
import Villas from './Villas/Villas';
import Like from './LikedPage/Like';
import Filter from './Filter/Filter';
import UserDashboard from './UserDashboard/UserDashboard'; // Import UserDashboard component

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
    <Router> {/* Wrap your components with BrowserRouter */}
      <>
        <Filter onSearch={handleSearch} />
        <div>
          {isLoggedIn ? (
            <>
              <h1>Welcome! You are logged in.</h1>
            </>
          ) : (
            <div>
              {/* If user is not logged in, render Login and Signup */}
              <Login handleLogin={handleLogin} />
              <Signup handleSignup={handleSignup} />
            </div>
          )}
        </div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/banglow" component={Banglow} />
        <Route path="/cabin" component={Cabin} />
        <Route path="/apartment" component={Apartment} />
        <Route path="/villas" component={Villas} />
        <Route path="/like" component={Like} />
        <Route path="/dashboard" component={UserDashboard} />
      </>
    </Router>
  );
};

export default App;
