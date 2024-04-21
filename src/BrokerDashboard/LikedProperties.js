import React, { useState, useEffect } from 'react';
import './LikedProperties.css';

const UserStateCard = ({ userState, property }) => {
  // Ensure userState and property are defined before accessing their properties
  if (!userState || !property) {
    return <div>Error: User state or property data is undefined.</div>;
  }

  return (
    <div className="user-state-card">
      <h4>User Status Details</h4>
      <p>User ID: {userState.userId}</p>
      <p>Broker ID: {userState.brokerId}</p>
      <p>Property ID: {userState.propId}</p>
      {/* Check if property type is defined before accessing it */}
      <h4>Property Details</h4>
      <p>Property Area: {property.price || 'N/A'}</p>
      <p>Property Area: {property.area || 'N/A'}</p>
      <p>Property Type: {property.type || 'N/A'}</p>
      <p>Property Location: {property.address || 'N/A'}</p>
    </div>
  );
};


const UserStateDashboard = () => {
  const [userStates, setUserStates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brokerId, setBrokerId] = useState('');
  const [properties, setProperties] = useState({});

  useEffect(() => {
    if (brokerId) {
      setLoading(true);
      fetch(`http://localhost:8081/user_status/${brokerId}`)
        .then(response => response.json())
        .then(data => {
          console.log("User States:", data); // Log user states to check data format
          setUserStates(data);
          setLoading(false);
          // Fetch property details for each user state
          data.forEach(userState => {
            fetch(`http://localhost:8081/Property/${userState.propId}`)
              .then(response => response.json())
              .then(propertyData => {
                console.log("Property Data:", propertyData); // Log property data to check format
                setProperties(prevProperties => ({
                  ...prevProperties,
                  [userState.propId]: propertyData
                }));
              })
              .catch(error => {
                console.error(`Error fetching property details for property ID ${userState.propId}:`, error);
              });
          });
        })
        .catch(error => {
          console.error('Error fetching user states:', error);
          setLoading(false);
        });
    }
  }, [brokerId]);
  
  const handleBrokerIdChange = (e) => {
    setBrokerId(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User State Dashboard</h2>
      <label htmlFor="brokerId">Enter Broker ID:</label>
      <input type="number" id="brokerId" value={brokerId} onChange={handleBrokerIdChange} />
      <div className="user-state-grid">
        {userStates.map(userState => (
          <UserStateCard
            key={userState.id}
            userState={userState}
            property={properties[userState.propId]}
          />
        ))}
      </div>
    </div>
  );
};

export default UserStateDashboard;
