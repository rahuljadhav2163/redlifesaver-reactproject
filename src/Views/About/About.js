import React from 'react';
import "./About.css";
import about from "./About.json"
import Navbar from '../../Component/Navbar/Navbar';
import whoarea from "./whoareare.jpg"
import { FacilityCard } from '../../Component/Card/Card';
import bdrop from "./blood.png"
import user from "./user (1).png"
import addition from "./add.png"
import Footer from "./../../Component/Footer/Footer"
import imgGearth from "./Donate-Gearth.jpg"
function About() {
  return (
    <div className='about'>
      <Navbar />

      <img src={whoarea} className='whoarea' />
      <div className='About-container'>
        <div>
         <h1>About Our Blood Donation Initiative</h1>
         <p>Welcome to [Your Organization's Name], where we are dedicated to promoting and supporting blood donation to save lives and improve community health. Our mission is to make a meaningful difference in the lives of those in need through the generous act of donating blood.</p>
         <h1>Our Purpose</h1>
         <p>At [Your Organization's Name], we believe that every drop of blood donated is a step towards a healthier and stronger community. We strive to raise awareness about the critical need for blood donations and facilitate the process for individuals to contribute.</p>
        </div>
        <div>
         <img src={imgGearth} className='Gearth-img'/>
        </div>
      </div>
      <hr className='hrone' />
      <hr className='hrtwo' />
      <h1 className='about-title'>Facilities We Provide</h1>
      <div className='facility-div'>
      <FacilityCard title="Find Blood" discription="Find blood banks and blood availability across the nation." faciBtn="Find Now" img={bdrop}/>
      <FacilityCard title="Locate Donors" discription="Locate donors nearby to contact in need them most." faciBtn="Locate Now" img={user}/>
      <FacilityCard title="Organize Blood Drive" discription="Get engaged by organizing a blood drive or blood camp with us." faciBtn="Request Now" img={addition}
       />
      </div>

   
<Footer/>
    </div>
  )
}

export default About
