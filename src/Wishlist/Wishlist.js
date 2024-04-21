// Wishlist.js
import React, { useState, useEffect } from 'react';
import '../Wishlist/Wishlist.css';

const Wishlist = ({ location }) => {
  const [likedProperties, setLikedProperties] = useState([]);

  useEffect(() => {
    const likedPropertiesFromStorage = localStorage.getItem('likedProperties');
    let mergedLikedProperties = [];

    if (likedPropertiesFromStorage) {
      mergedLikedProperties = JSON.parse(likedPropertiesFromStorage);
    }

    if (location && location.state && location.state.likedProperties) {
      mergedLikedProperties = [...mergedLikedProperties, ...location.state.likedProperties];
    }

    setLikedProperties(mergedLikedProperties);
  }, [location]);

  const removeFromWishlist = (propId) => {
    const updatedProperties = likedProperties.filter(property => property.prop_id !== propId);
    setLikedProperties(updatedProperties);
    localStorage.setItem('likedProperties', JSON.stringify(updatedProperties));
  };

  return (
    <div>
      <h1>Wishlist</h1>
      {likedProperties && likedProperties.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="card-container">
          {likedProperties.map((property, index) => (
            <div key={index} className="card">
              <div className="property-details">
                <p><strong>Property Id:</strong> {property.prop_id}</p>
                <p><strong>Price:</strong> {property.price}</p>
                <p><strong>Type:</strong> {property.type}</p>
                <p><strong>Area:</strong> {property.area}</p>
                <p><strong>BrokerId:</strong> {property.brokerId}</p>
                <p><strong>Address:</strong> {property.address}</p>
                <button onClick={() => removeFromWishlist(property.prop_id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
