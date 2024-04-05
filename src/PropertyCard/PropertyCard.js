import React from 'react';
import '../PropertyCard/Propertycard.css'; // Import CSS file for styling

const PropertyCard = ({ property }) => {
  const handleInterestedClick = () => {
    // Logic for interested button click
  };

  const handleLikeClick = () => {
    // Logic for like button click
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-info">
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <div className="buttons">
          <button onClick={handleInterestedClick}>Interested</button>
          <button onClick={handleLikeClick}>Like</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
