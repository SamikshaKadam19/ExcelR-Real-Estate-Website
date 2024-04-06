// Apartment.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Like from '../LikedPage/Like';
import '../Apartment/Apartment.css';
import Navbar from '../Navbar/Navbar';
import Apartment1 from '../assets/Apartment/Apartment1.jpg';
import Apartment2 from '../assets/Apartment/apartment 2.jpg';
import Apartment3 from '../assets/Apartment/Apartment 3.jpg';
import Apartment4 from '../assets/Apartment/Apartment 4.webp';
import Apartment5 from '../assets/Apartment/Apartment5.avif';
import Apartment6 from '../assets/Apartment/Apartment 6.webp';
import Apartment7 from '../assets/Apartment/Apartment7.webp';
import Apartment8 from '../assets/Apartment/Apartment8.webp';
import Apartment9 from '../assets/Apartment/Apartment9.jpg';

const Apartment = () => {
  const [likedApartments, setLikedApartments] = useState([]);
  // Sample apartment data
  const [filter, setFilter] = useState({
    price: '',
    type: '',
    postalCode: ''
  });

  const apartments = [
    {
      id: 1,
      image: Apartment1,
      liked: false,
      name: 'Cozy Apartment near Downtown',
      location: '123 Main Street',
      price: 1000,
      type: '1RK',
      postalCode: '12345'
    },
    {
      id: 2,
      image: Apartment2,
      liked: false,
      name: 'Spacious Apartment in Suburbia',
      location: '456 Elm Street',
      price: 2000,
      type: '1BHK',
      postalCode: '54321'
    },
    {
      id: 3,
      image: Apartment3,
      liked: false,
      name: 'Luxury Penthouse with a View',
      location: '789 Oak Avenue',
      price: 3000,
      type: '2BHK',
      postalCode: '67890'
    },
    {
      id: 4,
      image: Apartment4,
      liked: false,
      name: 'Charming Loft in the City',
      location: '1011 Pine Lane',
      price: 2500,
      type: 'Studio',
      postalCode: '13579'
    },
    {
      id: 5,
      image: Apartment5,
      liked: false,
      name: 'Modern Condo with Amenities',
      location: '1213 Maple Drive',
      price: 1800,
      type: '1BHK',
      postalCode: '24680'
    },
    {
      id: 6,
      image: Apartment6,
      liked: false,
      name: 'Rustic Studio in the Woods',
      location: '1415 Cedar Court',
      price: 1500,
      type: 'Studio',
      postalCode: '97531'
    },
    {
      id: 7,
      image: Apartment7,
      liked: false,
      name: 'Coastal Apartment with Ocean Views',
      location: '1617 Beach Road',
      price: 2200,
      type: '1BHK',
      postalCode: '80246'
    },
    {
      id: 8,
      image: Apartment8,
      liked: false,
      name: 'Elegant Apartment in Historic District',
      location: '1819 Grove Street',
      price: 2800,
      type: '2BHK',
      postalCode: '35791'
    },
    {
      id: 9,
      image: Apartment9,
      liked: false,
      name: 'Sunny Apartment with Private Patio',
      location: '2021 Sunflower Avenue',
      price: 1900,
      type: '1BHK',
      postalCode: '68420'
    },
    {
      id: 9,
      image: Apartment9,
      liked: false,
      name: 'Sunny Apartment with Private Patio',
      location: '2021 Sunflower Avenue',
      price: 1900,
      type: '1BHK',
      postalCode: '68420'
    },
    // Add more apartment data here
  ];
  const handleLike = (id) => {
    // Find the liked apartment
    const likedApartment = apartments.find(apartment => apartment.id === id);
    // Set the liked property to true
    likedApartment.liked = true;
    // Update the liked apartments list
    setLikedApartments(prevLikedApartments => [...prevLikedApartments, likedApartment]);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredApartments = apartments.filter(apartment => {
    return (
      (!filter.price || apartment.price >= parseInt(filter.price)) &&
      (!filter.type || apartment.type === filter.type) &&
      (!filter.postalCode || apartment.postalCode === filter.postalCode)
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
            {/* Add more options for apartment types */}
          </select>
        </label>
        <label>
          Filter by Postal Code:
          <input type="text" name="postalCode" value={filter.postalCode} onChange={handleFilterChange} />
        </label>
      </div>
      <div className="property-list">
        {filteredApartments.map((apartment) => (
          <div key={apartment.id} className="property-card">
            <img src={apartment.image} alt={`Apartment ${apartment.id}`} />
            <div className="apartment-details">
              <h3>{apartment.name}</h3>
              <p><strong>Location:</strong> {apartment.location}</p>
              <p><strong>Price:</strong> ${apartment.price}</p>
              <p><strong>Type:</strong> {apartment.type}</p>
              <p><strong>Description:</strong> {apartment.description}</p>
            </div>
            <button onClick={() => handleLike(apartment.id)}>
              {apartment.liked ? 'Unlike' : 'Like'}
            </button>
            <Link to={`/apartment/${apartment.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Link to='/Banglow'> <button className='bunglowbutton'>Go To Bunglow</button></Link>
      {/* Pass likedApartments state and setLikedApartments function as props to Like component */}
      <Like likedItems={likedApartments} />
    </div>
  );
};

export default Apartment;