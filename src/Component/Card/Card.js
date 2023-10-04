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
            <h1>{name}</h1>
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

