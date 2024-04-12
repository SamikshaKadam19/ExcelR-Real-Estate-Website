import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    handleLogin(email, password);
  };

  return (
    <div>
      <Navbar />
      <div className="LoginContainer"> 
        <div className="first">
          <h2 className="heading">Login</h2> 
          <form onSubmit={handleSubmit}>
            Email:<input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input" 
            />
            <br/><br/> 
            Password:<input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input" 
            />
            <br/><br/> 
            <button type="submit" id="submitbutton">Login</button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
