import React, { useState } from 'react'
import "./Events.css"
import Navbar from './../../Component/Navbar/Navbar'
import Config from './Events.json';


function Events() {
  

  return (
    <>
      <Navbar />
      <div className='image-back' >

      </div>

      <h1 className='text-quote '>Donate blood and save lives</h1>
      <h1 className='title-events'>EVENTS OF MAHARASHTRA STATE BRANCH DISTRICT</h1>




      <div className='event-city-container'>
        <div className='city'>
          <h1 className='city-title'>City</h1>

          <h2 className='cityName'>Pune</h2>
          <h2 className='cityName'>Nagpur</h2>
          <h2 className='cityName'>Dhule</h2>
          <h2 className='cityName'>Mumbai</h2>
        </div>

        <div className='event'>
          <h1 className='city-name-high'>Pune</h1>
          <h2> Events Snapshot</h2>

          {
            Config.events.map((eventDeta, index) => {
              const { img, title, description, date,imgEvent, imgEventnew1, dateEventNew,titleEvent1,descriptionEvent1,button} = eventDeta;

              return (<>
              {/* <div className='activity'>
                  <div>
                    <img src={imgEventnew1} height={190} width={230} style={{boxShadow:"0 0 5px rgb(128, 127, 127)"}}/>
               
                  </div>
                  <div className='title-description'>
                    <h3>{titleEvent1}</h3>
                    <b>{dateEventNew}</b>
                    <p className='description'>{descriptionEvent1}</p>
                  </div>
                </div> */}

                <div className='activity'>
                  <div>
                    <img src={imgEvent} height={190} width={230} />
                 
                  </div>/
                  <div className='title-description'>
                   <h3>{title} <span className='btn-new'>{button}</span></h3>
                    <b>{date}</b>
                    <p>{description}</p>
                   
                  </div>
                </div>
                <br/>
                
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