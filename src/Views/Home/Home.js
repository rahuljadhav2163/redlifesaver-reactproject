import React, { useState, useEffect } from 'react'
import "./Home.css"
import Navbar from "./../../Component/Navbar/Navbar"
import Footer from '../../Component/Footer/Footer'
import { Cardbtn, FindBlood } from './../../Component/Button/Button'
import { Countcard } from '../../Component/Card/Card'
import Datacount from "./Home.json"
import Donateblood from './img/donate-blood-haert.jpg'
import { useNavigate } from 'react-router-dom';
import Donerdata from "./../../Views/Showdonor/Showdonar.json"
import { Cardsponcer } from "./../../Component/Card/Card"
import Showdonor from '../Showdonor/Showdonor'
import Sponceimg from "./img/sponsorship.jpeg"
import Simg from "./img/Sponsorship-2048x1452.jpeg"
import {Cardtype} from "./../../Component/Card/Card"
import  showToast  from 'crunchy-toast';
function Home() {


  const [bloodcount, setBloodCount] = useState(Datacount)
  const navigate = useNavigate();
  const [ddata, setddata] = useState(Donerdata);
  const [search, setSearch] = useState("");

  const findpage = () => {
    const userInLocalStorage = localStorage.getItem('currentuser'); 
    if (userInLocalStorage) {
      navigate(`/showdonar/${search}`);
    } else {
      showToast('User not found..?', 'alert', 4000);
    }
  }
  
  return (
    <div>

      <div className='background-img'>
        <Navbar />
        <div className='container-blood-find'>
          <div className='homeform-container'>
            <select onChange={(e) => { setSearch(e.target.value) }} className="selectgroup">
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
            <button type='button' onClick={findpage} className='donar-find'>Find Donar</button>

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

            bloodcount.map((countInfo) => {
              const { number, group } = countInfo;
              return (
                <Countcard number={number} group={group} />
              )
            })
          }
        </div>
        <div className='cardddd-container'>
          <Cardtype head="Blood Donation Camps" text="We collaborate with colleges, corporates, RWAs to organize innovative and engaging blood donation camps end to end." btnname="Organize Camp"/>
          <Cardtype head="Handling Helpline" text="Through helpline requests, we help address immediate blood requirements by patients blood donation camps end to end." btnname="Find A Donor"/>
          <Cardtype head="Awareness Session" text="Street plays, competitions, and sessions - targeted at inspiring people, especially the first timers, to come out and donate." btnname="Learn A More"/>
          </div>

        <div className='containrdonater'>
          <img className='donateblood-img' src={Donateblood} />
          <div>
            <p className='shoulddonate'>Why Should Donate Blood ?</p>
            <p className='should-text'>Our nation requires 4 Crore Units of Blood while only 40 lakh units are available. Every two seconds someone needs Blood There is no substitute for Human Blood. It cannot be manufactured Blood donation is an extremely noble deed, It cannot be manufactured Blood donation is an extremely noble deed yet there is a scarcity of regular donors yet there is a scarcity of regular donors across India. We focus on creating & expanding a Virtual army of blood donating volunteers who could be searched and contacted by family/caregivers of a patient in times of need .</p>
            <button className='btn-bedonar'>Be A Donor</button>

          </div>
        </div>
        
        <div>
          <p className='text-sponcer'>OUR SPONCER</p>
          <div className='sponser-container'>
            <Cardsponcer title="Which service we provide ?" text=" Reetack Web development is the perfect matching of your business need because we provide to your business in the impressive way with branding your business need because  provide to your business in the impressive  with branding ." img={Sponceimg}
              name="Lucky" slogen="Web Devoloper" />
            <Cardsponcer title="We deliver the succes to every scale" text=" 01 Web Design & Development
             02 Android app Development 03 E-Commerce Websites 04 Graphics Design 05 Social SEO/SEM 06 Software
                   Development app Development 03 E-Commerce Websites 04 Graphics Design 05 Social SEO/SEM 06  ." img={Simg}
              name="Kotak" slogen="Limite Agency" />
            <Cardsponcer title="Which service we provide ?" text=" Reetack Web development is the perfect matching of your business need because we provide to your business in the impressive way with branding your business need because  provide to your business in the impressive  with branding ." img={Sponceimg}
              name="Reetack" slogen="Web Solution" />


          </div>

         
          

        </div>
        <Footer/>

      </div>
      
    </div>
  )
}
export default Home
