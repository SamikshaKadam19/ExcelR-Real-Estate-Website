import Navbar from '../Navbar/Navbar';
import './Login.css';

import React, { useState } from 'react';
import userService from './user-service-login'; 

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userData = await userService.Login(email, password);
      console.log("Login Success:", userData);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };


  return (
    <div>
      <Navbar />

      <div class="LoginContainer">
        <div class="firstpart">
        <h2 class="heading">Login</h2>
        <hr></hr><br></br>
        <form onSubmit={handleSubmit}>
          Email:<input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required id="input"/>
            <br></br><br></br>
          Password:<input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required id="input"/>
            <br></br><br></br>
          <button type="submit" id="submitbutton">Login</button>
        </form>
        </div>
        <div>
        <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600" alt="side iamge" id="secondpartimage"></img>
        </div>
      
      </div>
    </div>
  );
};

export default Login;
