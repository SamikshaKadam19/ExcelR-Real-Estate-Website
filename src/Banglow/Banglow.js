import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banglowImage from '../assets/Banglow/Banglow 4.jpg';
import '../Banglow/Banglow.css'

const Banglow = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null); // State to store the selected property
  const [likedProperties, setLikedProperties] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchProperties();
    const likedPropertiesFromStorage = localStorage.getItem('likedProperties');
    if (likedPropertiesFromStorage) {
      setLikedProperties(JSON.parse(likedPropertiesFromStorage));
    }
  }, []);

  const fetchProperties = () => {
    setLoading(true);
    fetch(`http://localhost:8081/Property/filtertypes/bungalow`)
      .then(response => response.json())
      .then(data => {
        setProperties(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
        setLoading(false);
      });
  };

  const handleLike = (id) => {
    const updatedProperties = properties.map(property => {
      if (property.prop_id === id) {
        return { ...property, liked: !property.liked };
      }
      return property;
    });
    setProperties(updatedProperties);
    
    const updatedLikedProperties = updatedProperties
      .filter(property => property.liked)
      .map(property => ({ prop_id: property.prop_id, price: property.price, type: property.type, area: property.area, brokerId: property.brokerId, address: property.address }));
    
    setLikedProperties(updatedLikedProperties);
    localStorage.setItem('likedProperties', JSON.stringify(updatedLikedProperties));
  };

  const handleViewDetails = (property) => {
    setSelectedProperty(property); // Set the selected property when "View Details" button is clicked
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.prop_id} className="property-card">
            <img src={banglowImage} alt={`Apartment ${property.prop_id}`} />
            <div className="property-details">
              <p><strong>Property Id:</strong> {property.prop_id}</p>
              <p><strong>Price:</strong> {property.price}</p>
              <p><strong>Type:</strong> {property.type}</p>
              <p><strong>Area:</strong> {property.area}</p>
              <p><strong>BrokerId:</strong> {property.brokerId}</p>
              <p><strong>Address:</strong> {property.address}</p>
            </div>
            <button onClick={() => handleLike(property.prop_id)}>
              {property.liked ? 'Unlike' : 'Like'}
            </button>
            <button onClick={() => handleViewDetails(property)}>View Details</button>

            {/* Conditionally render property details within the same card */}
            {selectedProperty && selectedProperty.prop_id === property.prop_id && (
              <div className="popup">
                <div className="popup-content">
                <p><strong>Facing:</strong> {selectedProperty.facing}</p>
                  <p><strong>Negotiable:</strong> {selectedProperty.negotiable}</p>
                  <p><strong>Deposite:</strong> {selectedProperty.deposite}</p>
                  <p><strong>Floor No:</strong> {selectedProperty.floor_no}</p>
                  <p><strong>Rent:</strong> {selectedProperty.rent}</p>
                  <p><strong>Year Built:</strong> {selectedProperty.year_built}</p>
                  <button onClick={() => setSelectedProperty(null)}>Close</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Link to="/dashboard">View Wishlist</Link>
    </div>
  );
};

export default Banglow;
