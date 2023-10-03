import React from 'react'
import "./Home.css"
import Navbar from "./../../Component/Navbar/Navbar"
import { FindBlood } from './../../Component/Button/Button'
function Home() {
  return (
    <div>

      <div className='background-img'>
        <Navbar />
        <div className='container-blood-find'>
          <div className='homeform-container'>
            <select className="selectgroup">
              <option>Blood Group :</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
            <input type='text' className="state" placeholder='State' />
            <input type='text' className="state" placeholder='District' />
            <input type='text' className="state" placeholder='Adress' />
            <FindBlood named="Find Blood" />
          </div>
          <div>
            <p className='home-danateline'>Danate Blood Give The Gift Of Life</p>
            <div className='crl-container'>
              <div className='cirlefirst'>
                <p className='drop-blood'><i class="bi bi-droplet-fill"></i></p>
                <p className='blood-bonor-text'>&nbsp;&nbsp;Request<br /><span className='doner-text'>Blood</span> </p>
              </div>

              <div className='cirlefirst'>
                <p className='drop-blood'><i class="bi bi-people-fill"></i></p>
                <p className='blood-bonor-text'>Find Blood <br /><span className='doner-text'>Donor</span> </p>
              </div>
            </div>

          </div>
        </div>

        <div className='conatiner-cards-home'>

          <div className='card-home'>
            <p className='name-danation'>Donation</p>
            <p className='rupees'><i class="bi bi-currency-rupee"></i></p>
          </div>

          <div className='card-homee'>
            <p className='name-danation'>Volunteer</p>
          </div>

          <div className='card-home'>
            <p className='name-danation'>Causes</p>
          </div>


        </div>
      </div>
      <div className='gggg'>

      </div>
    </div>

  )
}
export default Home
