import Navbar from '../Navbar/Navbar';
import './Login.css';
import { Link } from 'react-router-dom';

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
        <div class="firstloginpart">
        <h2 class="heading">Login</h2>
        <hr></hr><br></br>
        <form onSubmit={handleSubmit}>
          Email/Username:<input
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
            <div class="passwordsetup">
              <div>
            Remember Me
              </div>
              <div>
                <Link to="/forgotpass">Forgot Password</Link>
              </div>
            </div>
            <br></br>
          <button type="submit" id="submitloginbutton">Login</button>
          <p>Don't have account ??<Link to="/Signup" className='clickhere'> Create One</Link></p>
        </form>
        </div>
        <div>
        <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" alt="side iamge" id="secondpartimage"></img>
        </div>
      
      </div>
    </div>
  );
};

export default Login;
