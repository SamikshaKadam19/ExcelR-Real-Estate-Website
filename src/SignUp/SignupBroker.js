
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import brokerUp from './broker-service-signup'; // Import the service

const SignupBroker = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const user = {
    address: address,
    contact: contact,
      email: email,
      name: name,
      password: password,
    };

    brokerUp(user)
      .then((resp) => {
        console.log(resp);
        console.log("Success");
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

              <input className="form-control" name="userAddress" id="userAddress" type="text" placeholder="User Address" value={address} onChange={(e)=>setAddress(e.target.value)} autoComplete="off" />
              <span className="lighting"></span>
            </div>
            <div className="input-group">

              <input className="form-control" name="userContact" id="userContact" type="text" placeholder="userContact"  value={contact} onChange={(e)=>setContact(e.target.value)} autoComplete="off" />
              <span className="lighting"></span>
            </div>
            <div className="input-group">

              <input className="form-control" name="userEmail" id="userEmail" type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off" />
              <span className="lighting"></span>
            </div>
            <div className="input-group">

              <input className="form-control" name="userName" id="userName" type="text" placeholder="userName"  value={name} onChange={(e)=>setUsername(e.target.value)} autoComplete="off" />
              <span className="lighting"></span>
            </div>

            <div className="input-group">

              <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="userPassword"  value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off" />
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

export default SignupBroker;
