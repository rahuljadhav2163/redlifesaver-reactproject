import React, { useEffect, useState } from 'react';
import "./Bloodbank.css";
import Navbar from '../../Component/Navbar/Navbar';
import { SearchBtn } from './../../Component/Button/Button';
import Bloodbank from './Bloodbank.json';
import Footer from '../../Component/Footer/Footer';

import { Link } from 'react-router-dom';
import showdata from "./../Showhospitalname/Showhospitalname.json"
import Hospitalcard from '../../Component/Hospitalcard/Hospitalcard';


function Bloodbanks() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("");
  
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    
  };

  const filterhospital = showdata.filter((hospital)=>{
    return hospital.city === `${selectedDistrict}`
  })


  const districts = selectedState ? Bloodbank[selectedState] : [];
  return (
    <div className='bloodbank'>
      <Navbar />

      <h1 className='bb-heading'>Nearest Blood Bank</h1>
      <div className='main-input-div'>
        <div className='list-item-container'>
          <select className='list-item-find' onChange={handleStateChange}>
            <option value="">Select state</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Bihar">Bihar</option>
            <option value="Punjab">Punjab</option>
            <option value="Uttar-Pradesh">Uttar-Pradesh</option>
          </select>
        </div>
        <div>
          <select className='list-item-find' onChange={handleDistrictChange} >
            <option value=""  >Select District</option>
            {districts.map((district, index) => 
            (
              <option key={district}  >{district} </option>
               
            ))

            }
          </select>
        </div>
        <div>
        </div>
        <div>
       <SearchBtn search="Search"  />
        </div>
        <div>
    
        </div>
   
      </div>
      
      <div className='hospital-div'>
      {
         filterhospital.map((hospital, index) => {
            const { name, address, city, location ,contact,imgURL} = hospital;
            return (
              <div>
                <Hospitalcard name={name}  address={address} city={city} location={location} contact={contact} imgURL={imgURL} />
              </div>


            )
          })
        }
      </div>
    <h1 className='review'><Link to="/">Review</Link></h1>
      <Footer />
    </div>

  );
}

export default Bloodbanks;

