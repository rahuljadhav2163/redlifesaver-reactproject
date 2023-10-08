import React, { useState } from 'react';
import './Login.css';
import image from './blood-img.png'
import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import showToast from 'crunchy-toast';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user.email === email && user.password === password) {
      localStorage.setItem("currentuser", JSON.stringify(user));
      window.location.href = "/"

    }
    else {
      (showToast('Invalid Email Or Password..?', 'alert', 3000));
    }
  }

  return (
    <>
      <Navbar />
      <div className='login-image'>
        <div>
          <p className='blood-slogan-Hindi'>रक्तदान है पुण्य का काम आओ <br />सब मिलकर करे रक्तदान 🩸</p>
          <p className='blood-slogan'>"The gift of blood is a gift <br />to someone’s life 🩸."</p>
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
              <img src={image} className='blood-image' />
            </div>

            <button
              type="button"
              className="login-btn"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className='signup-link'>You have no account <Link to="/signup" className='link-signup'>Sign up</Link></p>
          </div>
        </form>

      </div>
      <Footer />

    </>
  );
}

export default Login;
