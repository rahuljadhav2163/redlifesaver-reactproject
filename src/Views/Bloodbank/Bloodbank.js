import React, { useEffect, useState } from 'react';
import "./Bloodbank.css";
import Navbar from '../../Component/Navbar/Navbar';
import { SearchBtn } from './../../Component/Button/Button';
import Bloodbank from './Bloodbank.json';
import Footer from '../../Component/Footer/Footer';
import blooddropimage from './blood-drop.png'
import { Link } from 'react-router-dom';
import showdata from "./../Showhospitalname/Showhospitalname.json"
import Hospitalcard from '../../Component/Hospitalcard/Hospitalcard';
import { StepCard } from "./../../Component/Card/Card"
import showToast from 'crunchy-toast';

function Bloodbanks() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSearch = () => {

    const userExistsInLocalStorage = localStorage.getItem('currentuser') !== null;

    if (userExistsInLocalStorage) {

      const filteredHospitalData = showdata.filter((hospital) => {
        return hospital.city === selectedDistrict;
      });
      setFilteredHospitals(filteredHospitalData);
    } else {
      showToast('User not found..?', 'alert', 4000);
    }
  };

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
        <div className='search-btn'>

          <button className='search-btnn' onClick={handleSearch}><i class="bi bi-search-heart"></i> Search</button>
        </div>
        <div>

        </div>

      </div>

      <div className='hospital-div'>
        {
          filteredHospitals.map((hospital, index) => {
            const { name, address, city, location, contact, imgURL } = hospital;
            return (
              <div className='hospital-card-flex'>
                <Hospitalcard name={name} address={address} city={city} location={location} contact={contact} imgURL={imgURL} />
              </div>


            )
          })
        }
      </div>
      <img src={blooddropimage} className='blooddropimg' />
      <p className="find-blood">HOW TO FIND BLOOD DONATION HOSPITAL STEPS</p>
      <div className='stepscard'>

        <StepCard steps="User Selection of State:" follorulls=" the user to select a state from a 
      predefined list or through a user interface where they can choose a state. The user Select name from a drop down menu"  />
        <StepCard steps="Processing User's State Selection:" follorulls="The receives the state. 
        It validates the state
        to ensure it matches one of the states or options."
        />
        <StepCard steps="Fetching Districts for the Selected State:" follorulls=" the user to select a state from a 
      predefined list or through a user interface where they can choose a state.It may display these districts to the user for selection." />
        <StepCard steps="User Selection of District:" follorulls=" The  user to select a district
             from the list of districts associated with the selected state.The user provides  
             the district name or selecting from a dropdown menu." />

        <StepCard steps="Processing User's District Selection:" follorulls=" The  user's receives  the district.
It validates the selected district it matches one of the districts associated with the selected state."  />
        <StepCard steps="Fetching Districts for the Selected State:" follorulls=" the user to select a state from a 
      predefined list or through a user interface where they can choose a state.It may display these districts to the user for selection." />
        <StepCard steps="Processing Hospital Data:" follorulls=" The program parses and processes the retrieved hospital data to extract the hospital names, addresses, and live location information." />
        <StepCard steps="Displaying or Printing Hospital Information:" follorulls=" The program displays  the extracted hospital names, addresses, and live locations to that hospital This could be presented as a card  for easy readability and understanding." />



      </div>

      <Footer />
    </div>

  );
}

export default Bloodbanks;

