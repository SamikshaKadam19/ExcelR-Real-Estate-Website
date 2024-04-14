
// import logo from './Black_Gold_Modern_Real_Estate_Logo-removebg-preview.png'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to search results page with the search query
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery(''); // Clearing search query after redirection (optional)
  };

  return (
    <nav className='navbar'>
      <div className='div1'>
        {/* <img src={logo} alt='logo' id="logo"></img> */}

        <NavLink className="nav-item" to="/">Home</NavLink>
          <input
            type="search"
            id="searchbar"
            placeholder='Search Location'
            onSubmit={handleSearch}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit"  id="searchsubmit">Search</button>
    

        <NavLink to="/login" className="nav-item">Login</NavLink>
        <NavLink to="/signup" className="nav-item">Register</NavLink>
        <NavLink to="/Wishlist" className="nav-item">Wishlist</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
