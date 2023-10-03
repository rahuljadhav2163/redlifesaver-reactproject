import React from 'react'
import "./Bloodbank.css"
import Navbar from '../../Component/Navbar/Navbar'
import {SearchBtn} from './../../Component/Button/Button'
import Bloodbank from './../../Views/Bloodbank/Bloodbank.json'


function Bloodbanks({districtMaha}) {
  
const addlistInMaharashtraDistrict =(districtMaha)=>{
  
}
  return (
    <div className='bloodbank'>
     <Navbar/>
     <h1 className='bb-heading'>Nearest Blood Bank</h1>
     <div className='main-input-div'>
     <div className='list-item-container'>
     <select className='list-item-find'>
   
       <option>select state</option>
   
      <option onClick={()=>{
        addlistInMaharashtraDistrict(Bloodbank.districtMaha);
        console.log(addlistInMaharashtraDistrict)
      }}>Maharashtra</option>
      <option>Goa</option>
   
   
     </select>
     </div>
     <div>
     <select className='list-item-find'>
      <option value="">select District</option>
      <option>{Bloodbank.districtMaha}</option>
      <option></option>
      <option></option>
      <option></option>
     </select>
     </div>
     <div>
      <input type='text' placeholder='Blood Bank or Hospital Name' className='list-item-find'/>
     </div>
     <div>
      < SearchBtn search="Search"/>
     </div>
     </div>
    </div>
    
  )
}

export default Bloodbanks