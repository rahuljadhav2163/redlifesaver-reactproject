import React from 'react'
import "./Hospitalcard.css"
import { Link } from 'react-router-dom'
function Hospitalcard({ name, address, city, location, contact, imgURL }) {
  return (
    <div className='hospital-card'>
  
      <div> <h3 className='name'>{name}</h3></div>
      <div className='marginal-div'><img src={imgURL} className='img-hospital' /></div>
      <div> <p className='address'>{address}</p></div>
      <div className='marginal-div'> <p className='contact'>{contact}</p></div>

      <div className='live-location'> <a href={location} className='location-decoration'> <i class="bi bi-geo-alt-fill" ></i>Get-Live-Location-of-hospital </a></div>
      </div>

   
  )
}

export default Hospitalcard