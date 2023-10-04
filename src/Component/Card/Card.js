import React from "react";
import "./Card.css";

export  const Countcard = (props) => {
  const {number , group} = props;

  return (
    <div className="count-card">  
      <h1 className="numer-count">{group}</h1>
      <h3 className="numer-count num">{number}</h3>
    </div>
  );
};


function Card() {
  return (
    <div>Card</div>
  )
}

export default Card