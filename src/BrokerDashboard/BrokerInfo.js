import React, { useState, useEffect } from 'react';
import '../BrokerDashboard/BrokerInfo.css';
const BrokerInfo = () => {
    const [brokerInfo, setBrokerInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    // Simulate fetching broker information from backend
    useEffect(() => {
      const fetchBrokerInfo = async () => {
        try {
          // Fetch broker information
          // const response = await fetchBrokerInfoFromBackend();
          // const data = await response.json();
          const data = { name: 'John Doe', email: 'john@example.com', company: 'ABC Realty' }; // Dummy data for demo
          setBrokerInfo(data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching broker information:', error);
          setIsLoading(false);
        }
      };
  
      fetchBrokerInfo();
    }, []);
  
    return (
      <div>
        <h2>Broker Information</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : brokerInfo ? (
          <div>
            <p><strong>Name:</strong> {brokerInfo.name}</p>
            <p><strong>Email:</strong> {brokerInfo.email}</p>
            <p><strong>Company:</strong> {brokerInfo.company}</p>
          </div>
        ) : (
          <p>No broker information available</p>
        )}
      </div>
    );
  };
  
  export default BrokerInfo;