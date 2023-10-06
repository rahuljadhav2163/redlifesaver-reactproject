import React, { useState } from 'react'
import "./Events.css"
import Navbar from './../../Component/Navbar/Navbar'
import Config from './Events.json';
import { Link } from 'react-router-dom'
import UpcomingECard from '../../Component/Card/UpcomingECard/UpcomingECard';
import MegaImg from './../../Component/Card/UpcomingECard/Blood-Donation-Camps-img.jpg';
import SevaImg from './../../Component/Card/UpcomingECard/img-4.png';
import ImgBlood from './../../Component/Card/UpcomingECard/seva-img.jpg'


function Events() {


  return (
    <>
      <Navbar />
      <div className='image-back' >

      </div>

      <h1 className='text-quote '>Donate blood and save lives</h1>
      <h1 className='title-events'>EVENTS OF MAHARASHTRA STATE BRANCH DISTRICT</h1>

      <div className='Event-main-container'>
        <UpcomingECard title={"Mega Blood Donation Camp"} ImgEvent={MegaImg} date={'15-10-2023'} description={'Konkan Medical TrustS Sahyadri Speaciality HBC'} Address={'Viman Nagar,Pune, Pune'} contact={8552962619} time={'10:00-15:00'} />

        <UpcomingECard title={"Blood Donation Camp"} ImgEvent={SevaImg} date={'25-10-2023'} description={'Pimpri Chinchwad Municipal CorporationS YCM HBC'} Address={'Link Road Thergaon,Pune, Pune'} contact={8788598953} time={'09:00-15:00'} />

        <UpcomingECard title={"Seva Pakhawada"} ImgEvent={ImgBlood} date={'20-10-2023'} description={'Ashtavinayak Hospital Blood Bank text'} Address={'Aalephata,Junner, Pune'} contact={8788598953} time={'10:00-13:00'} />

      </div>



      <div className='event-city-container'>
        <div className='city'>
          <h1 className='city-title'>City</h1>

          <h2 className='cityName'>Pune</h2>
          <Link to="/event/cityeventpage"> <h2 className='cityName'>Nagpur</h2></Link>
          <Link to="/event/cityeventpage"><h2 className='cityName'>Dhule</h2></Link>
          <Link to="/event/cityeventpage"><h2 className='cityName'>Mumbai</h2></Link>

        </div>

        <div className='event'>
          <h1 className='city-name-high'>Pune</h1>
          <h2> Events Snapshot</h2>

          {
            Config.events.map((eventDeta, index) => {
              const { img, title, description, date, imgEvent, imgEventnew1, dateEventNew, titleEvent1, descriptionEvent1, button } = eventDeta;

              return (<>

                <div className='activity'>
                  <div>
                    <img src={imgEvent} height={190} width={230} />

                  </div>
                  <div className='title-description'>
                    <h3>{title} <span className='btn-new'>{button}</span></h3>
                    <b>{date}</b>
                    <p>{description}</p>

                  </div>
                </div>
                <br />

              </>
              )
            }

            )
          }

        </div>
      </div>




    </>
  )
}

export default Events