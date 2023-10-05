import React, { useEffect, useState } from 'react';
import "./Bloodbank.css";
import Navbar from '../../Component/Navbar/Navbar';
import { SearchBtn } from './../../Component/Button/Button';
import Bloodbank from './Bloodbank.json';
import Footer from '../../Component/Footer/Footer';
import {hospitalnames} from "./../../Component/Util/Hospitaldata"
import Card from '../../Component/Card/Card';

function Bloodbanks() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [hospitalname, setHospitalName]=useState(hospitalnames);
  const[searchhospital,setSearchhospital]=useState('');

  useEffect(()=>{
    const filterhospital = hospitalnames.filter((hospital)=>{
      const name =hospital.name.toLocaleLowerCase();
    const query =searchhospital.toLocaleLowerCase();
    if (selectedDistrict) {
      const hospitalsInDistrict = hospitalname.filter(hospital => hospital.district === selectedDistrict);
      setHospitalName(hospitalsInDistrict);
    } else {
      setHospitalName(hospitalnames);
    }
   
    return(
      name.includes(query) 
      
   
    )
    })
    setHospitalName(filterhospital);
  },[searchhospital])

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
          <select className='list-item-find' onChange={handleDistrictChange} >
            <option value="" >Select District</option>
            {districts.map((district, index) => (
                 <option key={district} >{district} </option>
          
            ))
            
            }
           

          </select>
        </div>
        <div>
          <input type='text' placeholder='Blood Bank or Hospital Name' className='list-item-find' value={searchhospital}
          onChange={(e)=>{
            setSearchhospital(e.target.value)
          }}/>
       
          <div>
          {
              hospitalname.map((hospital,index)=>{
                const {name}= hospital;
                
                 return<Card  key={index} name={name}/>
                 
                
              })
            }
            
          </div>

        </div>
        <div>
          <SearchBtn search="Search"/>
        </div>
      </div>
     <Footer/>
    </div>
    
  );
}

export default Bloodbanks;

