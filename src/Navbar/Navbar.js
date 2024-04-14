import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to search results page with the search query
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery(''); // Clearing search query after redirection (optional)
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className='navbar'>
      <div className='centered-items'>
        <NavLink className="nav-item" to="/">Home</NavLink>
        <NavLink className="nav-item" to="/search">Search</NavLink>
        <input
          type="search"
          id="searchbar"
          placeholder='Search Location'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" id="searchsubmit" onClick={handleSearch}>Search</button>
        <NavLink className="nav-item" to="/login">Login</NavLink>
        <NavLink className="nav-item" to="/signup">Register</NavLink>
        {/* Add NavLink for Dashboard */}
        <NavLink className="nav-item" to="/dashboard">Dashboard</NavLink>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          User Role <i className="fas fa-chevron-down"></i>
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <div className="sub-dropdown">
              <button className="sub-dropbtn">User</button>
              <div className="sub-dropdown-content">
                <NavLink to="/login" className="nav-item">Login</NavLink>
                <NavLink to="/user/logout" className="nav-item">Logout</NavLink>
              </div>
            </div>
            <div className="sub-dropdown">
              <button className="sub-dropbtn">Broker</button>
              <div className="sub-dropdown-content">
                <NavLink to="/login" className="nav-item">Login</NavLink>
                <NavLink to="/broker/logout" className="nav-item">Logout</NavLink>
              </div>
            </div>
            <div className="sub-dropdown">
              <button className="sub-dropbtn">Admin</button>
              <div className="sub-dropdown-content">
                <NavLink to="/login" className="nav-item">Login</NavLink>
                <NavLink to="/logout" className="nav-item">Logout</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
