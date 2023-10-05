import React, { useState, useEffect } from 'react'
import Donarrdata from "./Showdonar.json"
import Navbar from '../../Component/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Card from "./../../Component/Card/Card"
import "./Showdonor.css";
import Footer from '../../Component/Footer/Footer';

function Showdonor() {
  const { bloodGroup } = useParams()
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState([]);

  const filteredData = Donarrdata.filter((data) => {
    return data.group === bloodGroup
  })

  useEffect(() => {

    const storedData = JSON.parse(localStorage.getItem('donor')) || [];

    if (storedData) {
      const parsedData = (storedData);
      setDataFromLocalStorage(parsedData);
    }
  }, []);

  const dataFromLocalStorageuy = dataFromLocalStorage.filter((data) => {
    return data.bloodGroup === bloodGroup
  })

  return (
    <div>
      <Navbar />
      <h1 className='show-donaer'>Showing Donors For {bloodGroup}</h1>
      <div className='display-card-container'>
        {
          filteredData.map((data, index) => {
            const { name, group, address, number, date } = data;
            return (
              <div>
                <Card name={name} group={group} address={address} numbar={number} date={date} />
              </div>


            )
          })
        }
      </div>

     <div className='display-card-container'>
        {
          dataFromLocalStorageuy?.map((data, index) => {
            const { name, bloodGroup, address, mobile, date } = data;
            return (
              <div>
                <Card name={name} group={bloodGroup} address={address} numbar={mobile} date={date} />
              </div>


            )
          })
        }
      </div>

      <Footer />
    </div>
  )
}
export default Showdonor