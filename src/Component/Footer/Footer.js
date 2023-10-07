import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import logo from "./logo-removebg-preview.png"
function Footer() {
  return (
    <footer className='footer-container'>
      <div className='container'>
        <div>
         <img src={logo } className='logo-png'/><span className='red-life-saver'>Red Life Saver</span>
          <p className='About-content'>
Welcome to RED LIFE SAVER, your trusted platform to facilitate easy access to blood when you need it the most.Our mission is to ensure a seamless experience in finding and obtaining blood, connecting donors with those in </p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <p> <Link to="/" className='text-decoration'>Home</Link></p>
          <p><Link to="/event" className='text-decoration'>Upcoming Campus</Link></p>
          <p><Link to="/bloodbank" className='text-decoration'>Bloodbank</Link></p>
          <p><Link to="/Blog" className='text-decoration'>Blog</Link></p>
        </div>
        <div>
          <h2>Contact Info</h2>
          <p><Link to="https://maps.app.goo.gl/HJZoASPpyNCQho6U8" className='text-decoration'><i class="bi bi-geo-alt"></i> 404 , Laxmi Height Above <br /> Lotus-Multi-speshality-Hospital <br />Manjari BK,pune -412307</Link></p>
          <p><Link to="https://mail.google.com/mail/u/0/#inbox" className='text-decoration'> <i class="bi bi-chat-left-text"></i> ninavenikita492@gmail.com</Link></p>
          <div className='icons-contact'>
            <p><a href='https://www.instagram.com/nikiininave/' className='icon-social'><i class="bi bi-instagram"></i></a></p>
        
            <p><a href='https://www.facebook.com/nikii.ninave/' className='icon-social'><i class="bi bi-facebook"></i></a></p>
          </div>

        </div>
        <div>
          <h2> Login</h2>
          <p><Link to="/login" className='text-decoration'><i class="bi bi-box-arrow-in-right"></i> Login</Link> </p>
          <p> <Link to="/register" className='text-decoration'><i class="bi bi-unlock"></i> register</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer