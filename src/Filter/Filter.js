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
        title: 'Beautiful Apartment ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'apartment'
      },
      {
        id: 2,
        title: 'Luxurious Villa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'villa'
      },
      {
        id: 3,
        title: 'Modern Bungalow ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'bungalow'
      },
      {
        id: 4,
        title: 'Beautiful Apartment ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'apartment'
      },
      {
        id: 5,
        title: 'Luxurious Villa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'villa'
      },
      {
        id: 6,
        title: 'Modern Bungalow',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'bungalow'
      },
      {
        id: 7,
        title: 'Beautiful Apartment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'apartment'
      },
      {
        id: 8,
        title: 'Luxurious Villa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'villa'
      },
      {
        id: 9,
        title: 'Modern Bungalow',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'bungalow'
      },
      // Add more property objects as needed
    ];
    setProperties(mockProperties);
  };

  const renderProperties = () => {
    // Filter properties based on property type
    const filteredProperties = properties.filter(property => property.type === propertyType);

    return filteredProperties.map(property => (
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
          <option value="415000">₹4,15,000</option>
          <option value="830000">₹8,30,000</option>
          <option value="1660000">₹16,60,000</option>
          <option value="4150000">₹41,50,000</option>
        </select>

        <select
          value={propertyType}
          onChange={e => {
            setPropertyType(e.target.value);
            setRoomType(''); 
          }}
          className="select-field"
        >
          <option value="">Select Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="bungalow">Bungalow</option>
          <option value="villa">Villa</option>
        </select>

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
