import React, { useState } from "react";
import './Sign-Up.css';
import Navbar from './../../Component/Navbar/Navbar';
import Footer from "../../Component/Footer/Footer";


export default function SignUp() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCheck() {
        const existingData = JSON.parse(localStorage.getItem('user')) || [];

        const newDoner = {
            name,
            mobile,
            email,
            password,
        };
        existingData.push(newDoner);

        localStorage.setItem('user', JSON.stringify(existingData));

        setEmail('');
        setMobile('');
        setName('');
        setPassword('');

    };


    return (
        <>
            <Navbar/>
            <form>
                <div className="form-container">
                    <div>
                        <img src="https://i.pinimg.com/564x/3c/20/a1/3c20a16bccae26d05a27243f9259b86e.jpg" className="img-signup"/>
                    </div>
                    <div>
                        <h1 className="title-signup">Sign Up</h1>
                    <span className="text-name">Name: </span> <input type="text"
                            placeholder="name"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            value={name} 
                            className="input-box"/><br />

                       <span className="text-mobile"> Mobile: </span> <input type="text"
                            placeholder="Mobile number"
                            onChange={(e) => {
                                setMobile(e.target.value)
                            }}
                            value={mobile} 
                            className="input-box"/><br />

                       <span className="text-mail">Email: </span> <input type="mail"
                            placeholder="email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email} 
                            className="input-box"/><br />

                        <span className="text-pass">Password: </span> <input type="password"
                            placeholder="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            className="input-box"
                        />
                        <button type="button" className="submit-btn" onClick={handleCheck}>Sign Up</button>
                    </div>
                </div>
            </form>
            <Footer/>
        </>
    )
}