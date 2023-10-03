import React from 'react'
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
            <h1>City</h1>

            <h2>Pune</h2>
            <h2>Nagpur</h2>
            <h2>Dhule</h2>
            <h2>Mumbai</h2>
          </div>

          <div className='event'>
            <h1> Events Snapshot</h1>
            {
             Config.events.map(  (eventDeta, index) =>{
                const {img, title, description} = eventDeta;

                return(
                  <div className='activity'>
                    <img src={img} height={100}/>
                    <h1>{title}</h1>
                    <p>{description}</p>
                  </div>
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