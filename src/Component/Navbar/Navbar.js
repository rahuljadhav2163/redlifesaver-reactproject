import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "./img/RLS-LOGO.png";
import Button from './../Button/Button';
import { Outbtn } from './../Button/Button';
import { Link } from "react-router-dom";
import Hplogo from "./img/hplogo.png"
import  showToast  from 'crunchy-toast';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
   
    const userData = JSON.parse(localStorage.getItem('currentuser'));
    if (userData) {
      setUser(userData);

    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentuser');
    setUser(null);
    showToast('Logout Succesfully', 'success', 4000);
  }

  return (
    <div>
      <div className='nav-container'>
        <img className='logo' src={logo} />

        <span className='call-icon'><i className="bi bi-telephone-forward"></i></span>
        <p className='mob-no'>+91 7057461164<p className='our-teanmm'>Red Life Saver Team</p></p>

        {user ? (
          <div className='log-contain'>
            <p className='users-name'><i class="bi bi-person-square"></i>&nbsp; {user.name}</p>
            <button className='logout-bn' onClick={handleLogout}><i className="bi bi-box-arrow-in-right"></i> Log Out</button>
          </div>
        ) : (
          <>
            <Link to="/signup"><Button text='Register' /></Link>
            <Link to="/login"><Outbtn btnname='Login' /></Link>
          </>
        )}
      </div>
      <div className='nav-item-container'>
      <img className='hplogo' src={Hplogo} /><span className='web-title'>RED LIFE SAVER</span>
        <p className='home-link'>
        
          <span className='link-tag'><Link className='decoration' to="/">HOME</Link></span>
          <span className='link-tag'><Link className='decoration' to="/event">UPCOMING CAMPS</Link></span>
          <span className='link-tag'><Link className='decoration' to="/bloodbank">BLOOD BANKS</Link></span>
          <span className='link-tag'><Link className='decoration' to="/blog">BLOG</Link></span>
          <span className='link-tag'><Link className='decoration' to="/about">ABOUT US</Link></span>
          <button className='danate-us'><Link className='decoration' to="/donateus">DONATE US</Link></button>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
