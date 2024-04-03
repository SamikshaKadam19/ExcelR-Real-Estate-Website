import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// import logo from './Black_Gold_Modern_Real_Estate_Logo-removebg-preview.png'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='div1'>
      {/* <img src={logo} alt='logo' id="logo"></img> */}

      <NavLink className="nav-item" to="/">Home</NavLink>
      <input type="search" id="searchbar" placeholder='search' ></input>
    
      <NavLink to="/Login" className="nav-item">Login</NavLink>
      <NavLink to="/SignUp" className="nav-item">Register</NavLink>
      </div>
    </nav>
  )

}



