
import { Link } from 'react-router-dom';
import './Signup.css';
import React, { useState } from 'react';
import userService from './user-service-signup'; // Import the service

const Signup = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {
      email: email,
      password: password,
      username: username,
    };

    userService.signUp(user)
      .then((resp) => {
        console.log(resp);
        console.log("Success");
        handleSignup();
        // Optionally, you can call handleSignup here if needed
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    
    <>


      <div className="start text-center">
      </div>
      <div className="wrapper">
        <div className="inner-warpper text-center">
          <h2 className="title">Signup</h2>
          <form id="formvalidate" onSubmit={handleSubmit}>
            <div className="input-group">

              <input className="form-control" name="userName" id="userName" type="text" placeholder="User Name" value={username} onChange={(e)=>setUsername(e.target.value)} autoComplete="off" />
              <span className="lighting"></span>
            </div>
            <div className="input-group">

              <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off" />
              <span className="lighting"></span>
            </div>

            <div className="input-group">

              <input className="form-control" name="email" id="email" type="email" placeholder="email"  value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off" />
              <span className="lighting"></span>

            </div>

            <button type="submit" id="Signup">Signup</button>
          </form>
        </div>
        <div className="signup-wrapper text-center">
          <Link to="/Login">Already have an accout? <span className="text-primary">Login</span></Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
