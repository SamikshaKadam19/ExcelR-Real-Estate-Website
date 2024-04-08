
import Navbar from '../Navbar/Navbar'

import React, { useState } from 'react';

const Wishlist = () => {
  const [likedProperties, setLikedProperties] = useState([]);

  // Function to remove a property from the wishlist
  const removeFromWishlist = (propertyId) => {
    setLikedProperties(likedProperties.filter(property => property.id !== propertyId));
  };

  return (
    <div>
        <Navbar/>
      <h1>Wishlist</h1>
      {likedProperties.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {likedProperties.map(property => (
            <li key={property.id}>
              <img src={property.image} alt={property.title} />
              <div>
                <h3>{property.title}</h3>
                <p>{property.description}</p>
                <button onClick={() => removeFromWishlist(property.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;

