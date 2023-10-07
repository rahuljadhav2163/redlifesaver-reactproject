import React from "react";
import "./Card.css";
import Cardimg from "./cardimggg.png";



export  const Countcard = (props) => {
  const {number , group} = props;

  return (
    <div className="count-card">  
      <h1 className="numer-count">{group}</h1>
      <h3 className="numer-count num">{number}</h3>
    </div>
  );
};

function Card({name,address,date,numbar,group}) {
  return (
    <div className="blood-grp-container">
          <div className="containt-container">
           <img className="cardimgg" src={Cardimg}/>
           <div>
            <p className="bld-grp">{group}</p>
            <h1 className="nameofdonor">{name}</h1>
            <h3>{address}</h3>
            <p>With Us From : {date}</p>
            <p>Contact : {numbar}</p>
            </div>

          </div>
          <div className="contact-container">
            <div className="sms-container"><p><i class="bi bi-envelope-fill"></i> SEND SMS</p></div>
            <div className="detail-container">MORE DETAIL</div>
          </div>
          
    </div>
  )
}

export default Card

export function Cardsponcer({title,text,img,name,slogen}) {
  return (
    <div>

      <div className="spncer-card">
          <h1 className="sponcer-title">{title}</h1>
          <p className="sponcer-text">{text}</p><hr/>
          <img className="sponce-img" src={img}/>
          <p className="sponce-name">{name}</p>
          <p className="sponce-slogen">{slogen}</p>
      </div>
    </div>
  )
}

export  function Cardtype({head,text,btnname}) {
  return (
    <div className="carddd-container">
      <h2 className="heading-card">{head}</h2>
      <p className="text-card">{text}</p>
      <button className="btn-card-btn">{btnname}</button>
    </div>
  )
}
export function StepCard({steps,follorulls}) {
  return (
    <div>

      <div className="StepsCard">
          <h3 className="stepcard-title">{steps}</h3>
          <p className="stepcard-descriptions">{follorulls}</p><hr/>

        
      </div>
    </div>
  )
}
export function FacilityCard({title,discription,faciBtn,img,link}){
  return(
    <div className="facility-container">
      <div className="facilityCard">
        <div className="facility">
     <div><img src={img}/></div>
     <div>
      <h3 className="facilitycard-title">{title}</h3>
      <p className="facilitycard-description">{discription}</p>
     <button className="faciBtn"><a href={link}>{faciBtn}</a></button>
      </div>
      </div>
      </div>
     
    </div>
  )
}
export function TeamCard({name, linkdin, github, img ,education}){
  return(
    <div className="Team-Card-container">
    <div className="team-member-container">
      <img src={img} className="team-member-image"/>
      <h3 className="team-members-name">{name}</h3>
      <p className="education-para">{education}</p>
      <div className="profile-div">
      <p className="team-members-email"><a href={github} className="profile-link"><i class="bi bi-github"></i></a></p>
      <p className="team-members-contact"><a href={linkdin} className="profile-link"><i class="bi bi-linkedin"></i></a></p>
      </div>
      </div>
      </div>
   
  )
}

