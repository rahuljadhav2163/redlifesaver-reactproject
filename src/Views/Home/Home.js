import React, { useState } from 'react'
import "./Home.css"
import Navbar from "./../../Component/Navbar/Navbar"
import { Cardbtn, FindBlood } from './../../Component/Button/Button'
import { Countcard } from '../../Component/Card/Card'
import Datacount from "./Home.json"
import Donateblood from './img/donate-blood-haert.jpg'
function Home() {


  const [bloodcount, setBloodCount] = useState(Datacount);



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
            <div className='container-donation'>
              <p className='rupees'><i class="bi bi-currency-rupee"></i></p>
              <p> <span className='danate-line'>We are graetfull for our real hero and hope for them always success who help danate.<Cardbtn value="Danate Us" /></span></p>

            </div>


          </div>

          <div className='card-home'>
            <p className='name-danation'>Volunteer</p>
            <div className='container-donation'>
              <p className='rupees'><i class="bi bi-person-heart"></i></p>
              <p> <span className='danate-line'>You will become a vital part of biggest blood donation organization Red Life Saver team in.<Cardbtn value="Joinn Now" /></span></p>
            </div>
          </div>



          <div className='card-home homii'>
            <p className='name-danation'>Causes</p>
            <div className='container-donation'>
              <p className='flag'><i class="bi bi-flag-fill"></i></p>
              <p> <span className='danate-line'>Red life saver team recieve today recent causes to fundering for capable charitable project.<span className='btnnnn'><Cardbtn value="Causes" /></span></span></p>
            </div>

          </div>


        </div>
        <p className='count-line'>Total Blood Donar Register With Red Life Saver Team.</p>
        <div className='countcontainer'>
          {

            bloodcount.map((countInfo)=>{
              const {number,group}=countInfo;
              return (
                <Countcard number={number} group={group} />
              )
            })
          }
        </div>

          <div className='containrdonater'>
          <img className='donateblood-img'  src={Donateblood} />
          </div>

      </div>

    </div>


  )
}
export default Home
