// Apartment.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Apartment/Apartment.css';

const Apartment = () => {
  // Sample apartment data
  const apartments = [
    {
      id: 1,
      image: 'https://example.com/apartment1.jpg',
      liked: false
    },
    {
      id: 2,
      image: 'https://example.com/apartment2.jpg',
      liked: false
    },
    // Add more apartment data here
  ];

  const handleLike = (id) => {
    // Implement like functionality here
    console.log(`Liked apartment with ID: ${id}`);
  };

  return (
    <div>
      <h2>Apartment Listings</h2>
      <div className="property-list">
        {apartments.map((apartment) => (
          <div key={apartment.id} className="property-card">
            <img src={apartment.image} alt={`Apartment ${apartment.id}`} />
            <button onClick={() => handleLike(apartment.id)}>
              {apartment.liked ? 'Unlike' : 'Like'}
            </button>
            <Link to={`/apartment/${apartment.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartment;
