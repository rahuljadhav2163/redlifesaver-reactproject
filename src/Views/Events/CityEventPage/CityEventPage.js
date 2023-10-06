import React, {useEffect, useState} from 'react'
import Config from './../Events.json';
import { useParams } from 'react-router-dom';
import CityEvent from '../../../Component/CityEvent/CityEvent';

function CityEventPage() {
    const {id} = useParams()

    const [event, setEvent] = useState({})

    useEffect(()=>{
        Config.forEach((eventObj) => {
            if(eventObj.id == id){
                setEvent(eventObj)
            }
        });
    }, [id])

    return (
        <>
         <div className='activity'>
            <div>
                <img src={event.imgEvent} height={190} width={230} />

            </div>/
            <div className='title-description'>
                <h3>{event.title} <span className='btn-new'>{event.button}</span></h3>
                <b>{event.date}</b>
                <p>{event.description}</p>

            </div>
        </div>

            {/* <div>title, date, description, button, imgEvent

                {
                    Config.nagpur.map((eventDeta, index) => {
                        const { title, description, imgEvent, date, button , content} = eventDeta;

                        return (
                        <>
                            <CityEvent title={title} description={description} date={date} content={content} imgEvent={imgEvent} button={button}/>
                        
                            
                        </>
                        )
                    }
                    )
                }
            </div > */
            }
        </>
    )
}


export default CityEventPage