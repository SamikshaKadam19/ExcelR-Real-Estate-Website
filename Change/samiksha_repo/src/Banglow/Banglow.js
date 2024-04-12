import React from 'react';
import { Link } from 'react-router-dom';
import '../Banglow/Banglow.css'; // Make sure to create Banglow.css with relevant styles

const Banglow = () => {
  // Sample bungalow data
  const banglows = [
    {
      id: 1,
      image: 'https://example.com/banglow1.jpg',
      liked: false
    },
    {
      id: 2,
      image: 'https://example.com/banglow2.jpg',
      liked: false
    },
    // Add more bungalow data here
  ];

  const handleLike = (id) => {
    // Implement like functionality here
    console.log(`Liked bungalow with ID: ${id}`);
  };

  return (
    <div>
      <h2>Bungalow Listings</h2>
      <div className="property-list">
        {banglows.map((banglow) => (
          <div key={banglow.id} className="property-card">
            <img src={banglow.image} alt={`Banglow ${banglow.id}`} />
            <button onClick={() => handleLike(banglow.id)}>
              {banglow.liked ? 'Unlike' : 'Like'}
            </button>
            <Link to={`/banglow/${banglow.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banglow;
