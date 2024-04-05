// Banglow.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Banglow/Banglow.css';
import Navbar from '../Navbar/Navbar';
import Like from '../LikedPage/Like';
import Banglow1 from '../assets/Banglow/Banglow1.jpg';
import Banglow2 from '../assets/Banglow/Banglow 2.jpg';
import Banglow3 from '../assets/Banglow/Banglow3.jpg';
import Banglow4 from '../assets/Banglow/Banglow 4.jpg';
import Banglow5 from '../assets/Banglow/Banglow5.jpg';
import Banglow6 from '../assets/Banglow/Banglow6.jpg';
import Banglow7 from '../assets/Banglow/Banglow7.jpg';

const Banglow = () => {
  const [likedBanglows, setLikedBanglows] = useState([]);
  // Sample bungalow data
  const [filter, setFilter] = useState({
    price: '',
    type: ''
  });

  const banglows = [
    {
      id: 1,
      image: Banglow1,
      liked: false,
      price: 200000,
      type: '2BHK',
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
      type: '3BHK',
      description: 'Luxurious bungalow with three bedrooms, offering premium amenities.'
    },
    {
      id: 4,
      image: Banglow4,
      liked: false,
      price: 300000,
      type: '3BHK',
      description: 'Modern bungalow with three bedrooms, featuring contemporary design.'
    },
    {
      id: 5,
      image: Banglow5,
      liked: false,
      price: 300000,
      type: '3BHK',
      description: 'Elegant bungalow with three bedrooms, showcasing sophistication.'
    },
    {
      id: 6,
      image: Banglow6,
      liked: false,
      price: 300000,
      type: '3BHK',
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
      id: 6,
      image: Banglow6,
      liked: false,
      price: 300000,
      type: '3BHK',
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
      id: 7,
      image: Banglow7,
      liked: false,
      price: 300000,
      type: '3BHK',
      description: 'Charming bungalow with three bedrooms, offering a tranquil retreat.'
    },
    // Add more bungalow data here
  ];

  const handleLike = (id) => {
    // Find the liked bungalow
    const likedBanglow = banglows.find(banglow => banglow.id === id);
    // Set the liked property to true
    likedBanglow.liked = true;
    // Update the liked bungalows list
    setLikedBanglows(prevLikedBanglows => [...prevLikedBanglows, likedBanglow]);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredBanglows = banglows.filter(banglow => {
    return (
      (!filter.price || banglow.price <= parseInt(filter.price)) &&
      (!filter.type || banglow.type === filter.type)&&
      (!filter.postalCode || banglow.postalCode === filter.postalCode)
    );
  });

  return (
    <div>
      <Navbar/>
      <div className="filters">
        <label>
          Filter by Price:
          <input type="number" name="price" value={filter.price} onChange={handleFilterChange} />
        </label>
        <label>
          Filter by Type:
          <select name="type" value={filter.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="1RK">1RK</option>
            <option value="1BHK">1BHK</option>
            <option value="1BHK">2BHK</option>
            {/* Add options for bungalow types */}
          </select>
        </label>
        <label>
          Filter by Postal Code:
          <input type="text" name="postalCode" value={filter.postalCode} onChange={handleFilterChange} />
        </label>
      </div>

      <div className="property-list">
        {filteredBanglows.map((banglow) => (
          <div key={banglow.id} className="property-card">
            <img src={banglow.image} alt={`Banglow ${banglow.id}`} />
            <div className="banglow-details">
              <h3>{`Banglow ${banglow.id}`}</h3>
              <p><strong>Price:</strong> ${banglow.price}</p>
              <p><strong>Type:</strong> {banglow.type}</p>
              <p><strong>Description:</strong> {banglow.description}</p>
            </div>
            <button onClick={() => handleLike(banglow.id)}>
              {banglow.liked ? 'Unlike' : 'Like'}
            </button>
            <Link to={`/banglow/${banglow.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
     <Link to='/Villas'> <button className='villabutton'>Go To Viilas</button></Link>
      {/* Pass likedBanglows state and setLikedBanglows function as props to Like component */}
      <Like likedItems={likedBanglows} />
    </div>
  );
};

export default Banglow;
