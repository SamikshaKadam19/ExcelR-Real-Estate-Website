import React, { useState, useEffect } from 'react';
import './UserDashboard.css'; // Import CSS file for styling
import Navbar from '../Navbar/Navbar';
import Wishlist from '../Wishlist/Wishlist'; // Import Wishlist component

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showUserInfo, setShowUserInfo] = useState(true); // State to control displaying user info or wishlist

  // Simulate fetching user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data
        // const userDataResponse = await fetchUserDataFromBackend();
        // const userData = await userDataResponse.json();
        const userData = { name: 'John Doe', email: 'john@example.com' }; // Dummy data for demo

        setUserData(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
 
      <div className="user-dashboard-container">
        <h1>User Dashboard</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="dashboard-options">
              <button className={`dashboard-option ${showUserInfo ? 'active' : ''}`} onClick={() => setShowUserInfo(true)}>User Information</button>
              <button className={`dashboard-option ${!showUserInfo ? 'active' : ''}`} onClick={() => setShowUserInfo(false)}>Wishlist</button>
            </div>
            {showUserInfo ? (
              <div className="user-info">
                <h2>User Information</h2>
                <p><span className="info-label">Name:</span> {userData.name}</p>
                <p><span className="info-label">Email:</span> {userData.email}</p>
              </div>
            ) : (
              <Wishlist />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
