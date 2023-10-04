import React from 'react'
import "./Button.css"
import Groupdata from "./../../Views/Showdonor/Showdonar.json"
import { useNavigate } from 'react-router-dom';


function Button({ text }) {
  return (
    <button className='btn-navbar'><i class="bi bi-person-plus-fill"></i> {text}
    </button>
  )
}
export default Button




export function Outbtn({ btnname }) {
  return (
    <button className='btn-navbar-out'><i class="bi bi-unlock"></i> {btnname}
    </button>
  )
}

export function FindBlood({ named }) {

  const navigate = useNavigate();

   const [donarData , setDonarData] = (Groupdata);
   

   

  const findpage = () => {
    navigate('/showdonar');
  }

  return (
    <button onClick={findpage} className='btn-findblood'> {named}
    </button>
  )
}

export function SearchBtn({ search }) {
  return (
    <button className='btn-search'><i class="bi bi-search-heart"></i> {search}
    </button>
  )
}

export function Cardbtn({ value }) {
  return (
    <button className='btncardout'>{value}
    </button>
  )
}

