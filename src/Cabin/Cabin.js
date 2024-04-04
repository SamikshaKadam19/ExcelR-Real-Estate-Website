import React from 'react';
import { Link } from 'react-router-dom';
import '../Cabin/Cabin.css'; // Make sure to create Cabin.css with relevant styles

const Cabin = () => {
  // Sample cabin data
  const cabins = [
    {
      id: 1,
      image: 'https://example.com/cabin1.jpg',
      liked: false
    },
    {
      id: 2,
      image: 'https://example.com/cabin2.jpg',
      liked: false
    },
    // Add more cabin data here
  ];

  const handleLike = (id) => {
    // Implement like functionality here
    console.log(`Liked cabin with ID: ${id}`);
  };

  return (
    <div>
      <h2>Cabin Listings</h2>
      <div className="property-list">
        {cabins.map((cabin) => (
          <div key={cabin.id} className="property-card">
            <img src={cabin.image} alt={`Cabin ${cabin.id}`} />
            <button onClick={() => handleLike(cabin.id)}>
              {cabin.liked ? 'Unlike' : 'Like'}
            </button>
            <Link to={`/cabin/${cabin.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cabin;
