import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../UserDashboard/UserDashboard.css'; // Import CSS file for styling
import Wishlist from '../Wishlist/Wishlist'; // Import Wishlist component

const UserDashboard = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showUserInfo, setShowUserInfo] = useState(true); // State to control displaying user info or wishlist
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState(null);

  // Simulate fetching user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data
        // const userDataResponse = await fetchUserDataFromBackend();
        // const userData = await userDataResponse.json();
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save edited data
    setUserData({ ...editedUserData });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogout = () => {
    // Perform logout actions if necessary
    // For example, clearing local storage, resetting state, etc.

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div>
      <div className="user-dashboard-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <h3>Menu</h3>
          </div>
          <ul className="sidebar-menu">
            <li className={`sidebar-menu-item ${!showUserInfo ? 'active' : ''}`} onClick={() => setShowUserInfo(false)}>Wishlist</li>
            <li className="sidebar-menu-item" onClick={handleLogout}>Logout</li> {/* Logout option */}
          </ul>
        </div>
        <div className="dashboard-content">
          <h1>User Dashboard</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {showUserInfo ? (
                <div className="user-info">
                  <h2></h2>
                </div>
              ) : (
                <Wishlist />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
