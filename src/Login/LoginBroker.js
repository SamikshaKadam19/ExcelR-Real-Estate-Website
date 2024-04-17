import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginBroker from './broker-service-login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const userData = await loginBroker(email, password);
      console.log("Login Success:", userData);
      setLoggedIn(true);
    } catch (error) {
      console.error("Login Error:", error);
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="wrapper">
      <div className="inner-warpper text-center">
        <h2 className='title'>Login</h2>
        <form action="" id="formvalidate" onSubmit={handleSubmit}>
          <div className="input-group">
            <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} name="userName" id="userName" type="text" placeholder="User Name" autoComplete="off" />
            <span className="lighting"></span>
          </div>
          <div className="input-group">
            <input className="form-control" name="userPassword" id="userPassword" type="password" placeholder="Password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} />
            <span className="lighting"></span>
          </div>
          <button type="submit" id="login">Login</button>
          {error && <p className="error">{error}</p>}
          <div className="clearfix supporter">
            <Link className="forgot pull-right" to="/">Forgot Password?</Link>
          </div>
        </form>
      </div>
      <div className="signup-wrapper text-center">
        {!loggedIn && (
          <Link to="/Signup">Don't have an accout? <span className="text-primary">Create One</span></Link>
        )}
        {loggedIn && (
          <Link to="/broker-dashboard">Continue to App</Link>
        )}
      </div>
    </div>
  );
};

export default Login;
