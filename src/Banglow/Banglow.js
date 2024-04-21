import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import banglowImage from '../assets/Banglow/Banglow 4.jpg';
import '../Banglow/Banglow.css'
=======
import '../Banglow/Banglow.css';
import Like from '../LikedPage/Like';
import Banglow1 from '../assets/Banglow/Banglow1.jpg';
import Banglow2 from '../assets/Banglow/Banglow 2.jpg';
import Banglow3 from '../assets/Banglow/Banglow3.jpg';
import Banglow4 from '../assets/Banglow/Banglow 4.jpg';
import Banglow5 from '../assets/Banglow/Banglow5.jpg';
import Banglow6 from '../assets/Banglow/Banglow6.jpg';
import Banglow7 from '../assets/Banglow/Banglow7.jpg';
import Popup from '../PropertyDetails/PropertyDetails';
>>>>>>> 2e8fde44371fa7871de3ea8437b29f3a43d8f8f1

const Banglow = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null); // State to store the selected property
  const [likedProperties, setLikedProperties] = useState([]);

<<<<<<< HEAD
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
=======
  const [isOpen, setIsOpen] = useState(false); 

  const handleButtonClick = () => {
    setIsOpen(!isOpen); 
  };

  const banglows = [
    {
      id: 1,
      image: Banglow1,
      liked: false,
      price: 200000,
      type: '1BHK',
      description: 'Cozy bungalow with two bedrooms, ideal for small families.'
    },
    {
      id: 2,
      image: Banglow2,
      liked: false,
      price: 300000,
      type: '3BHK',
      description: 'Spacious bungalow with three bedrooms, perfect for large families.'
    },
    {
      id: 3,
      image: Banglow3,
      liked: false,
      price: 300000,
      type: '2BHK',
      description: 'Luxurious bungalow with three bedrooms, offering premium amenities.'
    },
    {
      id: 4,
      image: Banglow4,
      liked: false,
      price: 300000,
      type: '1RK',
      description: 'Modern bungalow with three bedrooms, featuring contemporary design.'
    },
    {
      id: 5,
      image: Banglow5,
      liked: false,
      price: 300000,
      type: '1BHK',
      description: 'Elegant bungalow with three bedrooms, showcasing sophistication.'
    },
    {
      id: 6,
      image: Banglow6,
      liked: false,
      price: 300000,
      type: '2BHK',
      description: 'Rustic bungalow with three bedrooms, nestled amidst nature.'
    },
    {
      id: 7,
      image: Banglow7,
      liked: false,
      price: 300000,
      type: '3BHK',
      description: 'Charming bungalow with three bedrooms, offering a tranquil retreat.'
    },
    {
      id: 8,
      image: Banglow6,
      liked: false,
      price: 300000,
      type: '1BHK',
      description: 'Rustic bungalow with three bedrooms, nestled amidst nature.'
    },
    {
      id: 9,
      image: Banglow7,
      liked: false,
      price: 300000,
      type: '3BHK',
      description: 'Charming bungalow with three bedrooms, offering a tranquil retreat.'
    },
    {
      id: 10,
      image: Banglow7,
      liked: false,
      price: 300000,
      type: '3BHK',
      description: 'Charming bungalow with three bedrooms, offering a tranquil retreat.'
    },
    // Add more bungalow data here
  ];
>>>>>>> 2e8fde44371fa7871de3ea8437b29f3a43d8f8f1

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
<<<<<<< HEAD
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
=======
            <button onClick={handleButtonClick}>View Details</button>
            {isOpen && ( // Conditionally render popup content
        <div className="popup">
          {/* Your popup content here */}
          
        <div className="showPopUp">
            <ul className='DisplayPropertyItems'>
            <li> Include Parks</li>
            <li>Schools</li>
            <li>Shopping Center</li>
            <li>Public Transportation</li>
            <li>Swimming Pool</li>
            <li>Fitness Center</li>
            <li></li>
            </ul>
        </div>
          <button onClick={handleButtonClick}>Close Popup</button>
        </div>
      )}
>>>>>>> 2e8fde44371fa7871de3ea8437b29f3a43d8f8f1
          </div>
        ))}
      </div>

      <Link to="/dashboard">View Wishlist</Link>
    </div>
  );
};

export default Banglow;
