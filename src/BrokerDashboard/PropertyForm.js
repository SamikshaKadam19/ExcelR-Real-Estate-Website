import React, { useState } from 'react';
import '../BrokerDashboard/PropertyForm.css';

const PropertyForm = ({ brokerId }) => {
  const [property, setProperty] = useState({
    price: '',
    address: '',
    type: '',
    area:'',
    facing:'',
    negotiable:'',
    floor_no:'',
    year_built:'',
    rent:'',
    deposite:'',
    brokerId: brokerId || '', // Initialize with the provided brokerId or an empty string
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate brokerId
    if (!property.brokerId) {
      setError('Broker Id is required');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/Property/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(property)
      });

      if (!response.ok) {
        throw new Error('Failed to add property');
      }

      console.log('Property added successfully');
      setProperty({
        price: '',
        address: '',
        type: '',
        area:'',
        facing:'',
        negotiable:'',
        floor_no:'',
        year_built:'',
        rent:'',
        deposite:'',
        brokerId: brokerId || '',  // Reset brokerId to the provided value or an empty string
      });
    } catch (error) {
      console.error('Error:', error.message);
      setError('Failed to add property');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="property-form-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="brokerId" placeholder="Broker Id" value={property.brokerId} onChange={handleChange} required />
        <input type="text" name="price" placeholder="Property price" value={property.price} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Property address" value={property.address} onChange={handleChange} required />
        <input type="text" name="area" placeholder="Area" value={property.area} onChange={handleChange} required />
        <input type="text" name="type" placeholder="Type" value={property.type} onChange={handleChange} required />
        <input type="text" name="facing" placeholder="Facing" value={property.facing} onChange={handleChange} required />
        <input type="text" name="negotiable" placeholder="Negotiable" value={property.negotiable} onChange={handleChange} required />
        <input type="text" name="floor_no" placeholder="FloorNo" value={property.floor_no} onChange={handleChange} required />
        <input type="text" name="year_built" placeholder="YearBuilt" value={property.year_built} onChange={handleChange} required />
        <input type="text" name="rent" placeholder="Rent" value={property.rent} onChange={handleChange} required />
        <input type="text" name="deposite" placeholder="Deposite" value={property.deposite} onChange={handleChange} required />
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default PropertyForm;
