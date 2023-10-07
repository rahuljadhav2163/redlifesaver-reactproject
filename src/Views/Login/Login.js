import React, { useState } from 'react';
import './Login.css';
import image from './blood-img.png'
import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'

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
    <Navbar/>
    <div className='login-image'>
      <div>
        <p className='blood-slogan'>"The gift of blood is a gift <br/>to someone’s life 🩸."</p>
      </div>
      <form>
        <div className="login-container">
        <h1 className="login-form">Login Form</h1>
          <div className="email">
           
            <input
              type="text"
              placeholder='Email'
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
           
            <input
              type="password"
              placeholder='Password'
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src={image} className='blood-image'/>
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
       </div>
       <Footer/>
    </>
  );
}

export default Login;
