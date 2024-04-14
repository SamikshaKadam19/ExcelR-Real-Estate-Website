// Like.js
import React, { useState, useEffect } from 'react';
import '../Filter/Filter.css'; // Import the CSS file for styling

const PropertyFilter = ({ cities, onSearch }) => {
  const [city, setCity] = useState('');
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [properties, setProperties] = useState([]); // State to store fetched properties

  useEffect(() => {
    // Reset maxBudget whenever minBudget changes
    setMaxBudget('');
  }, [minBudget]);

  const handleSearch = () => {
    // Perform search based on filter criteria
    const searchData = { city, minBudget, maxBudget, propertyType, roomType };
    fetchProperties(searchData);
  };

  const fetchProperties = (searchData) => {
    // Simulated fetching of property data (replace with actual fetching logic)
    const mockProperties = [
      {
        id: 1,
        title: 'Beautiful Apartment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://example.com/apartment-image.jpg',
      },
      {
        id: 2,
        title: 'Luxurious Villa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://example.com/villa-image.jpg',
      },
      // Add more property objects as needed
    ];
    setProperties(mockProperties);
  };

  const renderProperties = () => {
    return properties.map(property => (
      <div key={property.id} className="property-card">
        <img src={property.image} alt={property.title} className="property-image" />
        <div className="property-info">
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <button className="interested-button">Interested</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="property-filter-container">
      <div className="property-filter">
        <input
          type="text"
          placeholder="Search by City"
          value={city}
          onChange={e => setCity(e.target.value)}
          className="input-field"
        />

        <label htmlFor="minBudget">Minimum Budget:</label>
        <select
          id="minBudget"
          name="minBudget"
          value={minBudget}
          onChange={e => setMinBudget(e.target.value)}
          className="select-field"
        >
          <option value="">Select Minimum</option>
          <option value="0">₹0</option>
          <option value="415000">₹4,15,000</option>
          <option value="830000">₹8,30,000</option>
          <option value="1660000">₹16,60,000</option>
          <option value="4150000">₹41,50,000</option>
        </select>

        <label htmlFor="maxBudget">Maximum Budget:</label>
        <select
          id="maxBudget"
          name="maxBudget"
          value={maxBudget}
          onChange={e => setMaxBudget(e.target.value)}
          className="select-field"
        >
          <option value="">Select Maximum</option>
        </select>

        <select
          value={propertyType}
          onChange={e => {
            setPropertyType(e.target.value);
            setRoomType(''); // Reset room type when property type changes
          }}
          className="select-field"
        >
          <option value="">Select Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="bungalow">Bungalow</option>
          <option value="villa">Villa</option>
          <option value="rented_house">Rented House</option>
          <option value="commercial_area">Commercial Area</option>
          {/* Add more property types as needed */}
        </select>

        {/* Render room options based on selected property type */}
        {propertyType && (
          <select
            value={roomType}
            onChange={e => setRoomType(e.target.value)}
            className="select-field"
          >
            <option value="">Select Room Type</option>
            <option value="1rk">1RK</option>
            <option value="1bhk">1BHK</option>
            <option value="2bhk">2BHK</option>
            <option value="3bhk">3BHK</option>
            {/* Add more options as needed */}
          </select>
        )}

        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      
      {/* Property card display */}
      <div className="property-list">
        {renderProperties()}
      </div>
    </div>
  );
};

export default PropertyFilter;