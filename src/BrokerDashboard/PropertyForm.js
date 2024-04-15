import React, { useState } from 'react';
import '../BrokerDashboard/PropertyForm.css';

const PropertyForm = () => {
  const [property, setProperty] = useState({
    name: '',
    type: '',
    price: '',
    location: '',
    amenities: '',
    photo: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log('Submitted:', property);
    // Reset form fields
    setProperty({
      name: '',
      type: '',
      price: '',
      location: '',
      amenities: '',
      photo: '',
      city: ''
    });
  };

  return (
    <div className="property-form-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Property Name" value={property.name} onChange={handleChange} />
        <input type="text" name="type" placeholder="Property Type" value={property.type} onChange={handleChange} />
        <input type="text" name="price" placeholder="Price" value={property.price} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={property.location} onChange={handleChange} />
        <input type="text" name="amenities" placeholder="Amenities" value={property.amenities} onChange={handleChange} />
        <input type="text" name="photo" placeholder="Photo URL" value={property.photo} onChange={handleChange} />
        <input type="text" name="city" placeholder="City" value={property.city} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PropertyForm;
