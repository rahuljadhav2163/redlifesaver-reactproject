import React from 'react'
import Donarrdata from "./Showdonar.json"
import Navbar from '../../Component/Navbar/Navbar';
function Showdonor() {

  return (
    <div>
      <Navbar/>

      {
        Donarrdata.map((data, index) => {
          const {name , group , address} = data;
          return (
            <div>

              <h1>{name}</h1>
              <h2>{group}</h2>

            </div>
          )


        })
      }
    </div>
  )
}

export default Showdonor
