import React, { useState } from 'react';
import './Login.css';
import  showToast  from 'crunchy-toast';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    
    const user = JSON.parse(localStorage.getItem('user'));

    if (user.email === email && user.password === password) {
      localStorage.setItem("currentuser", JSON.stringify(user));
      showToast('Login Succesfully...!', 'success', 3000);
      window.location.href = "/"
      } 
    else {
      (showToast('Invalid Email Or Password..?', 'alert', 3000));
    }
  }

  return (
    <>
      <h1 className="login-form">Login Form</h1>
      <form>
        <div className="login-container">
          <div className="email">
            <label type="email">Email</label>
            <input
             
              name="email"
              id="email"
              type="email" 
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
       
    </>
  );
}

export default Login;
