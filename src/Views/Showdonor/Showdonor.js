import React from 'react'
import Donarrdata from "./Showdonar.json"
import Navbar from '../../Component/Navbar/Navbar';
import { useParams } from 'react-router-dom';

function Showdonor() {
  const { bloodGroup  } = useParams()

  const filteredData = Donarrdata.filter((data)=>{
    return data.group == bloodGroup
  })
  
  return (
    <div>
      <Navbar/>
      <h1>Showing Donors for {bloodGroup}</h1>
      {
        filteredData.map((data, index) => {
          const {name , group , address} = data;
          return (
            <div>

              <h1>{name}</h1>
              <h2>{group}</h2>
              <h3>{address}</h3>

            </div>
          )


        })
      }
    </div>
  )
}

export default Showdonor