import React from 'react'
import './CityEvent.css'


function CityEvent({title, date, description, button, imgEvent}) {
    return (

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

    )
}

export default CityEvent
