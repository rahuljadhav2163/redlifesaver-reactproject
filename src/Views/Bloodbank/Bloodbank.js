import React, { useState } from 'react';
import "./Bloodbank.css";
import Navbar from '../../Component/Navbar/Navbar';
import { SearchBtn } from './../../Component/Button/Button';
import Bloodbank from './Bloodbank.json';

function Bloodbanks() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const districts = selectedState ? Bloodbank[selectedState] : [];

  return (
    <div className='bloodbank'>
      <Navbar/>
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
          <select className='list-item-find' onChange={handleDistrictChange}>
            <option value="">Select District</option>
            {districts.map((district, index) => (
                 <option key={district}>{district}</option>
            ))}
          </select>
        </div>
        <div>
          <input type='text' placeholder='Blood Bank or Hospital Name' className='list-item-find' />
        </div>
        <div>
          <SearchBtn search="Search"/>
        </div>
      </div>
    </div>
  );
}

export default Bloodbanks;

