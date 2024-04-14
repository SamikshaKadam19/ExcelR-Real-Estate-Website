import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import PropertyCard from './PropertyCard';
import LikedProperties from './LikedProperty';
import BrokerInfo from './BrokerInfo'
import '../BrokerDashboard/BrokerDashboard.css';


const BrokerDashboard = () => {
    const [view, setView] = useState('info');
  
    return (
      <div className="broker-dashboard">
        <div className="dashboard-options">
          <button className={view === 'info' ? 'active' : ''} onClick={() => setView('info')}>Broker Information</button>
          <button className={view === 'addProperty' ? 'active' : ''} onClick={() => setView('addProperty')}>Add Property</button>
          <button className={view === 'propertyList' ? 'active' : ''} onClick={() => setView('propertyList')}>Property List</button>
          <button className={view === 'likedProperties' ? 'active' : ''} onClick={() => setView('likedProperties')}>Liked Properties</button>
        </div>
        <div className="dashboard-content">
          {view === 'info' && <BrokerInfo />}
          {view === 'addProperty' && <PropertyForm />}
          {view === 'propertyList' && <PropertyCard />}
          {view === 'likedProperties' && <LikedProperties />}
        </div>
      </div>
    );
  };
  
  export default BrokerDashboard;