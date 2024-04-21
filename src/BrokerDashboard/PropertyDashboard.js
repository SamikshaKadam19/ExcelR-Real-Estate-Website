import React, { useState, useEffect } from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <h3>Property Details</h3>
      <p>Price: {property.price}</p>
      <p>Address: {property.address}</p>
      <p>Area: {property.area}</p>
      <p>Type: {property.type}</p>
    </div>
  );
};

const PropertyDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brokerId, setBrokerId] = useState(''); // Initialize with an empty string

  useEffect(() => {
    if (brokerId) {
      setLoading(true);
      fetch(`http://localhost:8081/Property/broker/${brokerId}`)
        .then(response => response.json())
        .then(data => {
          setProperties(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching properties:', error);
          setLoading(false);
        });
    }
  }, [brokerId]); // Fetch properties whenever brokerId changes

  const handleBrokerIdChange = (e) => {
    setBrokerId(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Property Dashboard</h2>
      <label htmlFor="brokerId">Enter Broker ID:</label>
      <input type="number" id="brokerId" value={brokerId} onChange={handleBrokerIdChange} />
      <div className="property-list">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyDashboard;
