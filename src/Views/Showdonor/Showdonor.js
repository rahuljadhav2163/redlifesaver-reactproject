import React from 'react'
import Donarrdata from "./Showdonar.json"
import Navbar from '../../Component/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Card  from "./../../Component/Card/Card"
import "./Showdonor.css";
import Footer from '../../Component/Footer/Footer';

function Showdonor() {
  const { bloodGroup  } = useParams()

  const filteredData = Donarrdata.filter((data)=>{
    return data.group === bloodGroup
  })


  
  return (
    <div>
      <Navbar/>
      <h1 className='show-donaer'>Showing Donors For {bloodGroup}</h1>
      <div className='display-card-container'>
      {
        filteredData.map((data, index) => {
          const {name , group , address,number,date} = data;
          return (
            <div> 
             <Card name={name} group={group} address={address} numbar={number} date={date}/>
            </div>

          
          )
         })
      }
      </div>
      <Footer/>
    </div>
  )
}
export default Showdonor