import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setMessage] = useState('');

  const handleLogin = () => {
    
    const user = JSON.parse(localStorage.getItem('user'));

    console.log(user);

    if ( user.email === email && user.password === password) {
     
      alert('Login successfullly');
    } else {
      
      setMessage('Invalid email  password');
    }
  }

  

  return (
    <>
      <h1 className="login-form">Login Form</h1>
      <form>
        <div className="login-container">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
       <p className="error-message">{errorMessage}</p>
    </>
  );
}

export default Login;
