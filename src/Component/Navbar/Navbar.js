import React from 'react'
import "./Navbar.css"
import logo from "./img/redlifesaverlogo.png"
import Button from './../Button/Button'
import { Outbtn } from './../Button/Button'
function Navbar() {
  return (
    <div>
      <div className='nav-container'>
        <img className='logo' src={logo} />

        <span className='call-icon'><i class="bi bi-telephone-forward"></i></span>
        <p className='mob-no'>+91 7057461164<p className='our-tean'>Red Life Saver Team</p></p>
        <Button text='Register' />
        <Outbtn btnname="Login" />
      </div>
      <div className='nav-item-container'>

        <p className='home-link'>
          <span className=' link-tag'>HOME</span>
          <span className='link-tag'>UPCOMING CAMPS</span>
          <span className='link-tag'>BLOOD BANKS</span>
          <span className='link-tag'>BLOG</span>
          <span className='link-tag'>ABOUT US</span>
          <button className='danate-us'>DONATE US</button>
        </p>
         
      </div>


    </div>
  )
}

export default Navbar
