import Navbar from '../Navbar/Navbar';
import React, { useState } from 'react';
import './Signup.css'; 

const Signup = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your signup logic here
    handleSignup(email, password);
  };

  return (
    <div>
      <Navbar />
      <div className="SignupContainer"> 
        <div className="firstpart"> 
          <p className="heading">Register</p> 
          <form onSubmit={handleSubmit}>
            Name:<br></br>
            <input type="text" className="input"></input> 
            <br></br><br></br>
            Username:<br></br>
            <input type="text" className="input"></input> 
            <br></br><br></br>
            Email:<br></br>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input" 
            /><br></br><br></br>
            Password: <br></br>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input" 
            /><br></br><br></br>
            Confirm Password: <br></br>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input" 
            /><br></br><br></br>
            Role:
            <div className="domain"> 
              <div className="radio">
                <label>
                  <input type="radio" name="role" value="Broker" checked={role === "Broker"} onChange={() => setRole("Broker")} />
                  Broker
                </label>
              </div>
              <br />
              <div className="radio">
                <label>
                  <input type="radio" name='role' value="client" checked={role === "Client"} onChange={() => setRole("Client")} />
                  Client
                </label>
              </div>
            </div>
            <br></br><br></br>
            <button type="submit" id="submitbutton" className="submitbutton">Register</button> 
          </form>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600" alt="side image" id="secondpartimage"></img>
        </div>
      </div>
    </div>
  );
};

export default Signup;
