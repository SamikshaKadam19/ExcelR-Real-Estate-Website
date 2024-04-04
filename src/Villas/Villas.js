import React from 'react';
import { Link } from 'react-router-dom';
import '../Villas/Villas.css'; // Make sure to create Villas.css with relevant styles

const Villas = () => {
  // Sample villas data
  const villas = [
    {
      id: 1,
      image: 'https://example.com/villa1.jpg',
      liked: false
    },
    {
      id: 2,
      image: 'https://example.com/villa2.jpg',
      liked: false
    },
    // Add more villa data here
  ];

  const handleLike = (id) => {
    // Implement like functionality here
    console.log(`Liked villa with ID: ${id}`);
  };

  return (
    <div>
      <h2>Villa Listings</h2>
      <div className="property-list">
        {villas.map((villa) => (
          <div key={villa.id} className="property-card">
            <img src={villa.image} alt={`Villa ${villa.id}`} />
            <button onClick={() => handleLike(villa.id)}>
              {villa.liked ? 'Unlike' : 'Like'}
            </button>
            <Link to={`/villas/${villa.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Villas;
