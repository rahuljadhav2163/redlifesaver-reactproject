import React, { useState } from 'react';
import "./Events.css";
import Navbar from './../../Component/Navbar/Navbar';
import Config from './Events.json';
import UpcomingECard from '../../Component/Card/UpcomingECard/UpcomingECard';
import MegaImg from './../../Component/Card/UpcomingECard/Blood-Donation-Camps-img.jpg';
import SevaImg from './../../Component/Card/UpcomingECard/img-4.png';
import ImgBlood from './../../Component/Card/UpcomingECard/seva-img.jpg';
import Footer from './../../Component/Footer/Footer';

function Events() {
  const [selectedCity, setSelectedCity] = useState("pune"); 

  const handleChangeCity = (city) => {
    setSelectedCity(city);
  };

  const getEventData = (city) => {
    return Config[city.toLowerCase()] || [];
  };

  return (
    <>
      <Navbar />
   
      <div className='image-back'> </div>
      <div className='campdetail'>
        <h1 className='title-color'>What is the main goal of organizing blood donation events and camps?</h1>
        <p className='text-donationDetail'> The main goal of organizing blood donation events and camps is to ensure a stable and adequate supply of blood for medical emergencies, surgeries, and various medical treatments. These events aim to:
        <br/><br/><b>💖Save Lives: </b>By collecting donated blood, these events provide a lifeline to patients in critical conditions, such as accident victims, surgery patients, cancer patients, and individuals with blood disorders.<br/><br/>
        <b>Support Healthcare: </b>Blood donation events play a crucial role in supporting the healthcare system by ensuring that hospitals and clinics have a sufficient and readily available blood supply.<br/><br/>
        <b>Raise Awareness:</b> They also serve to raise awareness about the importance of regular blood donation and create a culture of altruism and community responsibility.<br/><br/>
        <b>Foster Community Engagement: </b> These events bring communities together, encouraging individuals to actively participate in helping others and contributing to the well-being of society</p>
        
      </div>
      <h1 className='text-quote'>Donate blood and save lives</h1>
      <h1 className='title-events'>EVENTS OF MAHARASHTRA STATE BRANCH DISTRICT</h1>

      <h1 className='upcoming-camp'>Upcoming Camps </h1>

      <div className='Event-main-container'>
        <UpcomingECard
          title={"Mega Blood Donation Camp"}
          ImgEvent={MegaImg}
          date={'15-10-2023'}
          description={'Konkan Medical TrustS Sahyadri Specialty HBC'}
          Address={'Viman Nagar, Pune'}
          contact={8552962619}
          time={'10:00-15:00'}
        />
        <UpcomingECard
          title={"Blood Donation Camp"}
          ImgEvent={SevaImg}
          date={'25-10-2023'}
          description={'Pimpri Chinchwad Municipal CorporationS YCM HBC'}
          Address={'Link Road Thergaon, Pune'}
          contact={8788598953}
          time={'09:00-15:00'}
        />
        <UpcomingECard
          title={"Seva Pakhawada"}
          ImgEvent={ImgBlood}
          date={'20-10-2023'}
          description={'Ashtavinayak Hospital Blood Bank text'}
          Address={'Aalephata, Junner, Pune'}
          contact={8788598953}
          time={'10:00-13:00'}
        />
      </div>

      <h1 className='upcoming-camp'>Recent Completed Camps </h1>
      <div className='city-data'>
        <div className='city'>
          <h1 className='city-title'>City</h1>
          <h2 className='cityName' onClick={() => handleChangeCity("Pune")}>Pune</h2>
          <h2 className='cityName' onClick={() => handleChangeCity("Nagpur")}>Nagpur</h2>
          <h2 className='cityName' onClick={() => handleChangeCity("Dhule")}>Dhule</h2>
          <h2 className='cityName' onClick={() => handleChangeCity("Mumbai")}>Mumbai</h2>
        </div>

        <div className='event'>
          <h1 className='city-name-high'>{selectedCity}</h1>
          <h2>Events Snapshot</h2>
          {getEventData(selectedCity).map((eventData, index) => {
            const { imgEvent, title, description, date} = eventData;
            return (
              <div className='activity' key={index}>
                <div>
                  <img src={imgEvent} height={190} width={230} alt={`Event ${index}`} />
                </div>
                <div className='title-description'>
                  <h3>{title} </h3>
                  <b>{date}</b>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;
