import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className='footer-container'>
      <div className='container'>
        <div>
          <h2>About Us</h2>
        </div>
        <div>
          <h2>Quick Links</h2>
          <p> <Link to="/" className='text-decoration'>Home</Link></p>
          <p><Link to="/event" className='text-decoration'>Upcoming Campus</Link></p>
          <p><Link to="/bloodbank" className='text-decoration'>Bloodbank</Link></p>
          <p><Link to="blog" className='text-decoration'>Blog</Link></p>
        </div>
        <div>
          <h2>contact Info</h2>
          <p><Link to="https://maps.app.goo.gl/HJZoASPpyNCQho6U8" className='text-decoration'><i class="bi bi-geo-alt"></i> 404 , Laxmi Height Above <br /> Lotus-Multi-speshality-Hospital <br />Manjari BK,pune -412307</Link></p>
          <p><Link to="https://mail.google.com/mail/u/0/#inbox" className='text-decoration'> <i class="bi bi-chat-left-text"></i> ninavenikita492@gmail.com</Link></p>
          <div className='icons-contact'>
            <p><i class="bi bi-instagram"></i></p>
            <p><i class="bi bi-github"></i></p>
            <p><i class="bi bi-facebook"></i></p>
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