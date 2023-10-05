import React, { useState } from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import cardData from "./Card.json"

function Card({ name }) {

  const [mycard, setCard] = useState([ ]);

  const cardchange = (event) => {
    setCard(event.target.value)
   document.write(mycard)
  }
  const data =  [mycard];
  return (
    <div className="hospital-card"  >
      <h1><Link to="" onClick={cardchange} >{name}</Link></h1>
      {
              cardData.map((text, index) => {
             
               return(
                <div>
                
                </div>
               )
              })

          }
    </div>
  )
}

export default Card