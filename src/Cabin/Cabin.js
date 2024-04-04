// Cabin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Cabin/Cabin.css';
import Like from '../LikedPage/Like';
import Cabin1 from '../assets/Cabin/Cabin1.jpg';
import Cabin2 from '../assets/Cabin/CAbin2.webp';
import Cabin3 from '../assets/Cabin/Cabin3.jpg';
import Cabin4 from '../assets/Cabin/Cabin4.jpeg';
import Cabin5 from '../assets/Cabin/Cabin5.jpeg';
import Cabin6 from '../assets/Cabin/Cabin6.webp';
import Cabin7 from '../assets/Cabin/Cabin7.jpg';
import Cabin8 from '../assets/Cabin/Cabin8.jpg';
import Cabin9 from '../assets/Cabin/Cabin9.avif';



const Cabin = () => {
  const [likedCabins, setLikedCabins] = useState([]);
  // Sample cabin data
  const [filter, setFilter] = useState({
    price: '',
    type: ''
  });

  

  const cabins = [
    {
      id: 1,
      image: Cabin1,
      liked: false,
      price: 150000,
      type: 'Wooden',
      description: 'Rustic cabins made of wood, perfect for a cozy retreat in nature.'
    },
    {
      id: 2,
      image: Cabin2,
      liked: false,
      price: 200000,
      type: 'Log',
      description: 'Traditional log cabins with modern amenities, offering a blend of comfort and nature.'
    },
    {
      id: 3,
      image: Cabin3,
      liked: false,
      price: 200000,
      type: 'Log',
      description: 'Secluded log cabins surrounded by picturesque landscapes, ideal for a peaceful getaway.'
    },
    {
      id: 4,
      image: Cabin4,
      liked: false,
      price: 200000,
      type: 'Log',
      description: 'Charming log cabins nestled amidst lush forests, providing a tranquil retreat.'
    },
    {
      id: 5,
      image: Cabin5,
      liked: false,
      price: 200000,
      type: 'Log',
      description: 'Cozy log cabins with rustic interiors, offering a cozy atmosphere for relaxation.'
    },
    {
      id: 6,
      image: Cabin6,
      liked: false,
      price: 200000,
      type: 'Log',
      description: 'Modern log cabins featuring spacious layouts and breathtaking views of nature.'
    },
    {
      id: 7,
      image: Cabin7,
      liked: false,
      price: 200000,
      type: 'Log',
      description: 'Quaint log cabins with comfortable furnishings and serene surroundings.'
    },
    {
      id: 8,
      image: Cabin8,
      liked: false,
      price: 200000,
      type: 'Log',
      description: 'Tranquil log cabins offering a peaceful escape from the hustle and bustle of city life.'
    },
    {
      id: 9,
      image: Cabin9,
      liked: false,
      price: 200000,
      type: 'Log',
      description: 'Cozy log cabins nestled in the mountains, providing a serene retreat amidst nature.'
    },
    // Add more cabin data here
    // Add more cabin data here
  ];

  const handleLike = (id) => {
    // Find the liked cabin
    const likedCabin = cabins.find(cabin => cabin.id === id);
    // Set the liked property to true
    likedCabin.liked = true;
    // Update the liked cabins list
    setLikedCabins(prevLikedCabins => [...prevLikedCabins, likedCabin]);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredCabins = cabins.filter(cabin => {
    return (
      (!filter.price || cabin.price <= parseInt(filter.price)) &&
      (!filter.type || cabin.type === filter.type)
    );
  });

  return (
    <div>
      <h2>Cabin Listings</h2>
      <div className="filters">
        <label>
          Filter by Price:
          <input type="number" name="price" value={filter.price} onChange={handleFilterChange} />
        </label>
        <label>
          Filter by Type:
          <select name="type" value={filter.type} onChange={handleFilterChange}>
            <option value="">All</option>
            {/* Add options for cabin types */}
          </select>
        </label>
      </div>
      <div className="property-list">
        {filteredCabins.map((cabin) => (
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
      {/* Pass likedCabins state and setLikedCabins function as props to Like component */}
      <Like likedItems={likedCabins} />
    </div>
  );
};

export default Cabin;
