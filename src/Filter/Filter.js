import React, { useState } from 'react';
import '../Filter/Filter.css'; // Import the CSS file for styling

const PropertyFilter = ({ cities, onSearch }) => {
  const [city, setCity] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [properties, setProperties] = useState([]); // State to store fetched properties

  const handleSearch = () => {
    // Perform search based on filter criteria
    const searchData = { city, budgetRange, propertyType, roomType };
    fetchProperties(searchData);
  };

  const fetchProperties = (searchData) => {
    // Simulated fetching of property data (replace with actual fetching logic)
    const mockProperties = [
      {
        id: 1,
        title: 'Beautiful Apartment',
        description: 'Cozy Apartment near Downtown',
        image: 'https://example.com/apartment-image.jpg',
      },
      {
        id: 2,
        title: 'Apartment',
        description: 'Spacious Apartment in Suburbia',
        image: 'https://example.com/villa-image.jpg',
      },
      {
        id: 2,
        title: 'Bunglow',
        description: 'Cozy bungalow with two bedrooms, ideal for small families.',
        image: 'https://example.com/villa-image.jpg',
      },
      {
        id: 2,
        title: 'Apartment',
        description: 'Rustic cabins made of wood, perfect for a cozy retreat in nature.',
        image: 'https://example.com/villa-image.jpg',
      },
      {
        id: 2,
        title: 'Bunglow',
        description: 'Traditional log cabins with modern amenities, offering a blend of comfort and nature.',
        image: 'https://example.com/villa-image.jpg',
      },
      {
        id: 2,
        title: 'Villa',
        description: 'Charming Loft in the City',
        location: '1011 Pine Lane',
        image: 'https://example.com/villa-image.jpg',
      },
      {
        id: 2,
        title: 'Appartment',
        description: 'Modern Condo with Amenities',
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

        <select
          value={budgetRange}
          onChange={e => setBudgetRange(e.target.value)}
          className="select-field"
        >
          <option value="">Select Budget Range</option>
          <option value="0-5000">$0 - $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000-20000">$10,000 - $20,000</option>
          <option value="20000-50000">$20,000 - $50,000</option>
          <option value="50000-100000">$50,000 - $100,000</option>
          <option value="100000+">$100,000+</option>
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
