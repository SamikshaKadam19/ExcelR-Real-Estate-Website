import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../UserDashboard/UserDashboard.css'; // Import CSS file for styling
import Navbar from '../Navbar/Navbar';
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
        const userData = { name: 'John Doe', email: 'john@example.com', age: 30, phone: '1234567890', address: '123 Street, City' }; // Dummy data for demo

        setUserData(userData);
        setEditedUserData({ ...userData });
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
      <Navbar />
      <div className="user-dashboard-container">
        <div className="sidebar">
          <div className="sidebar-header">
            <h3>Menu</h3>
          </div>
          <ul className="sidebar-menu">
            <li className={`sidebar-menu-item ${showUserInfo ? 'active' : ''}`} onClick={() => setShowUserInfo(true)}>User Information</li>
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
                  <h2>User Information</h2>
                  {isEditing ? (
                    <form>
                      <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={editedUserData.name} onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label>Age:</label>
                        <input type="number" name="age" value={editedUserData.age} onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={editedUserData.email} onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label>Phone:</label>
                        <input type="tel" name="phone" value={editedUserData.phone} onChange={handleInputChange} />
                      </div>
                      <div className="form-group">
                        <label>Address:</label>
                        <textarea name="address" value={editedUserData.address} onChange={handleInputChange} />
                      </div>
                      <button type="button" onClick={handleSave}>Save</button>
                    </form>
                  ) : (
                    <>
                      <p><span className="info-label">Name:</span> {userData.name}</p>
                      <p><span className="info-label">Age:</span> {userData.age}</p>
                      <p><span className="info-label">Email:</span> {userData.email}</p>
                      <p><span className="info-label">Phone:</span> {userData.phone}</p>
                      <p><span className="info-label">Address:</span> {userData.address}</p>
                      <button type="button" onClick={handleEdit}>Edit</button>
                    </>
                  )}
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
