import React from 'react'
import './UpcomingECard.css';

function UpcomingECard({ title, ImgEvent, description, Address, date, contact, time }) {
    return (

        <div className='eventCard'>
            <div>
                <img src={ImgEvent} className='imgEvent' /><hr/>
                <div className='text'>
                <h2 className='title'>{title}</h2>
                <p><b>Conducted by: </b>{description}<br/><b>Date:</b> {date}<br /><b>Address: </b>{Address}
                 <br /><b>Contact:</b>{contact}<br /><b>Time: </b>{time}</p>
                 </div>
                <button className='button'>Register</button>

            </div>

        </div>


    )
}

export default UpcomingECard
