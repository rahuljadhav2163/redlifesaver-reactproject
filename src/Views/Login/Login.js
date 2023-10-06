import React from 'react'
import "./Login.css"

function Login() {
  return (
    <>
    <h1 className='login-form'>Login Form</h1>
    <form>
      <div className='login-container'>
    <div className='email'>
      <label htmlFor='email'>Email</label>  
      <input type='text' name='email' id='email'/>
    </div>

    <div className='password'>
      <label htmlFor='password'>Password</label>  
      <input type='text' name='password' id='password'/>
    </div>
    <button type='button' className='login-btn'>Login</button>
    </div>
    </form>
    </>
  )
}

export default Login