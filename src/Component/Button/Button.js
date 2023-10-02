import React from 'react'
import "./Button.css"
function Button({text}) {
  return (
    <button className='btn-navbar'><i class="bi bi-person-plus-fill"></i> {text}  
    </button>
  )
}

export default Button




export  function Outbtn({btnname}) {
  return (
    <button className='btn-navbar-out'><i class="bi bi-unlock"></i> {btnname}  
    </button>
  )
}

export function FindBlood({named}) {
  return (
    <button className='btn-findblood'> {named}  
    </button>
  )
}