import React from 'react';
import "./About.css";
import Navbar from '../../Component/Navbar/Navbar';
import whoarea from "./whoareare.jpg"
import Card, { Cardsponcer, FacilityCard, StepCard } from '../../Component/Card/Card';
import bdrop from "./blood.png"
import user from "./user (1).png"
import addition from "./add.png"
import Footer from "./../../Component/Footer/Footer"
import imgGearth from "./Donate-Gearth.jpg"
import { TeamCard } from '../../Component/Card/Card';
import member1 from "./mypic.JPG"
import member2 from "./nikita.jpeg"
import member3 from "./shweta.jpeg"
import member4 from "./mansi.jpeg"


function About() {
  return (
    <div className='about'>
      <Navbar />

      <img src={whoarea} className='whoarea' />
      <div className='About-container'>
        <div className='initiative-purpose-div'>
          <h1>About Our Blood Donation Initiative</h1>
          <p className='para'>Welcome to <b>Red Blood Saver</b>, where we are dedicated to promoting and supporting blood donation to save lives and improve community health. Our mission is to make a meaningful difference in the lives of those in need through the generous act of donating blood.</p>
          <h1>Our Purpose</h1>
          <p className='para'>At  <b>Red Blood Saver</b>, we believe that every drop of blood donated is a step towards a healthier and stronger community. We strive to raise awareness about the critical need for blood donations and facilitate the process for individuals to contribute.</p>
          <h1>Our commitment</h1>
          <p className='para'>At <b>Red Blood Saver</b> , our primary commitment is to ensure that anyone in need of blood can easily access our services. We have established a streamlined process to facilitate quick and efficient blood donations for patients in need. Our goal is to be a reliable and easily accessible resource for those requiring blood transfusions during medical emergencies, surgeries, or other medical treatments.</p>
        </div>

        <div>
          <img src={imgGearth} className='Gearth-img' />
        </div>
      </div>
      <h1 className='help-heading'>How You Can Help</h1>
      <div className='help-card'><StepCard steps="Donate Blood:" follorulls="Join our blood donation drives and make a direct impact by donating blood." />
        <StepCard steps="Spread the Word:" follorulls="Help us raise awareness about the importance of blood donation within your community, workplace, or social circle." />
        <StepCard steps="Volunteer:" follorulls=" Become a volunteer and assist us in organizing events and drives to increase participation in blood donation." />
      </div>
      <hr className='hrone' />
      <hr className='hrtwo' />
      <h1 className='about-title'>Facilities We Provide</h1>
      <div className='facility-div'>
        <FacilityCard title="Find Blood" discription="Find blood banks and blood availability across the nation." faciBtn="Find Now" img={bdrop} link="/bloodbank"/>
        <FacilityCard title="Locate Donors" discription="Locate donors nearby to contact in need them most." faciBtn="Locate Now" img={user} link="/"/>
        <FacilityCard title="Organize Blood Drive" discription="Get engaged by organizing a blood drive or blood camp with us." faciBtn="Request Now" img={addition}
         link="/event"/>
      </div>
      <h1 className='our-team'>Our Team</h1>
      <div className='team-card'>
       
       
        <TeamCard name="Rahul Jadhav" linkdin="https://www.linkedin.com/in/rahul2163" github="https://github.com/rahuljadhav2163" img={member1} education=" Education -I am currently pursuing BE 3rd year from Parikrama college of engineering.I am passionate about coding, cricket."/>
       
        <TeamCard name="Nikita Kadiwike" linkdin="https://www.linkedin.com/in/nikitakadiwike/ " github="https://github.com/nikii2003" img={member2} education="Education -I am purshuing  B.Tech from TGPCET .I am passionate about coding and games."/>


        <TeamCard name="Shweta Pund" linkdin="https://www.linkedin.com/in/shwetapund/ " github="https://github.com/shwetapund" img={member3} education="Education -I have completed BCA from RSMDP. I am passionate about coding and singing."/>

        <TeamCard name="Mansi Dethe" linkdin="https://www.linkedin.com/in/mansi-dethe-349909229/" github="https://github.com/mansidethe" img={member4} education="Education - I have completed BCA from Art's Science & Commerce College Rahuri. I am passionate about coding and reading."/>
        
      </div>
   
      <Footer />
    </div>
  )
}

export default About
