// Villas.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Villas/Villas.css';
import Like from '../LikedPage/Like';
import Villa1 from '../assets/Villas/Villa1.avif'
import Villa2 from '../assets/Villas/Villa2.webp';
import Villa3 from '../assets/Villas/Villa3.jpg';
import Villa4 from '../assets/Villas/villa4.jpg';
import Villa5 from '../assets/Villas/Villa5.jpg';
import Villa6 from '../assets/Villas/Villa6.jpg';
import Villa7 from '../assets/Villas/Villa7.jpg';
import Villa8 from '../assets/Villas/Villa8.jpg';
import Villa9 from '../assets/Villas/villa9.jpg';

const Villas = () => {
  const [likedVillas, setLikedVillas] = useState([]);
  // Sample villas data
  const [filter, setFilter] = useState({
    price: '',
    type: ''
  });


  const villas = [
    {
      id: 1,
      image: Villa1,
      liked: false,
      name: 'Cozy Villas near Downtown',
      location: '123 Main Street',
      price: 100000,
      type: '3bhK',
      postalCode: '12345',
      description: 'Beautiful villas located in a serene neighborhood, perfect for families.'
    },
    {
      id: 2,
      image: Villa2,
      liked: false,
      price: 300000,
      type: 'Standard',
      description: 'Luxurious villas with spacious interiors and modern amenities.'
    },
    {
      id: 3,
      image: Villa3,
      liked: false,
      price: 300000,
      type: 'Standard',
      description: 'Elegant villas offering a blend of comfort and sophistication.'
    },
    {
      id: 4,
      image: Villa4,
      liked: false,
      price: 300000,
      type: 'Standard',
      description: 'Modern villas with stunning architectural design and scenic views.'
    },
    {
      id: 5,
      image: Villa5,
      liked: false,
      price: 300000,
      type: 'Standard',
      description: 'Spacious villas surrounded by lush greenery, providing tranquility and privacy.'
    },
    {
      id: 6,
      image: Villa6,
      liked: false,
      price: 300000,
      type: 'Standard',
      description: 'Contemporary villas featuring state-of-the-art facilities and premium amenities.'
    },
    {
      id: 7,
      image: Villa7,
      liked: false,
      price: 300000,
      type: 'Standard',
      description: 'Exclusive villas offering luxury living in a prestigious neighborhood.'
    },
    {
      id: 8,
      image: Villa8,
      liked: false,
      price: 300000,
      type: 'Standard',
      description: 'Charming villas with classic architecture and modern comforts.'
    },
    {
      id: 9,
      image: Villa9,
      liked: false,
      price: 300000,
      type: 'Standard',
      description: 'Tranquil villas nestled amidst natural beauty, ideal for a peaceful retreat.'
    },
    // Add more villa
  ];

  const handleLike = (id) => {
    // Find the liked villa
    const likedVilla = villas.find(villa => villa.id === id);
    // Set the liked property to true
    likedVilla.liked = true;
    // Update the liked villas list
    setLikedVillas(prevLikedVillas => [...prevLikedVillas, likedVilla]);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredVillas = villas.filter(villa => {
    return (
      (!filter.price || villa.price <= parseInt(filter.price)) &&
      (!filter.type || villa.type === filter.type)
    );
  });

  return (
    <div>
      <h2>Villa Listings</h2>
      <div className="filters">
        <label>
          Filter by Price:
          <input type="number" name="price" value={filter.price} onChange={handleFilterChange} />
        </label>
        <label>
          Filter by Type:
          <select name="type" value={filter.type} onChange={handleFilterChange}>
            <option value="">All</option>
            {/* Add options for villa types */}
          </select>
        </label>
      </div>
      <div className="property-list">
        {filteredVillas.map((villa) => (
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
      {/* Pass likedVillas state and setLikedVillas function as props to Like component */}
      <Like likedItems={likedVillas} />
    </div>
  );
}

export default Villas;