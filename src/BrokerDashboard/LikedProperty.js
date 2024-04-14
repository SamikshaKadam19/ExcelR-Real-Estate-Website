import React from 'react';
import '../BrokerDashboard/LikedProperty.css';

const LikedProperty = ({ property }) => {
  return (
    <div className="liked-property">
      <img src={property?.photo} alt={property?.name} />
      <div className="property-details">
        <h3>{property?.name}</h3>
        <p>{property?.type}</p>
        <p>{property?.price}</p>
        <p>{property?.location}</p>
        {/* Add other property details here */}
      </div>
    </div>
  );
};

export default LikedProperty;
