import React, { useState } from "react";
import './Sign-Up.css';
import showToast from 'crunchy-toast';
import Navbar from './../../Component/Navbar/Navbar';
import Footer from "../../Component/Footer/Footer";
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleCheck() {
        const user = {
            name,
            mobile,
            email,
            password,
        };

        localStorage.setItem("user", JSON.stringify(user));

        showToast('Sign Up Succesfully', 'success', 3000);


        setEmail('');
        setMobile('');
        setName('');
        setPassword('');
    }

    return (
        <>
            <Navbar />
            <form>
                <div className="form-container">
                    <div>
                        <img src="https://i.pinimg.com/564x/3c/20/a1/3c20a16bccae26d05a27243f9259b86e.jpg" className="img-signup" />
                    </div>
                    <div className="signup-container">



                        <h1 className="title-signup">Sign Up</h1>
                        <input type="text"
                            placeholder="Name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                            className="input-box" /><br />

                        <input type="text"
                            placeholder="Mobile number"
                            onChange={(e) => {
                                setMobile(e.target.value);
                            }}
                            value={mobile}
                            className="input-box" /><br />

                        <input type="Email"
                            placeholder="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                            className="input-box" /><br />

                        <input type="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            className="input-box"
                        /><br />
                        <button type="button" className="submit-btn" onClick={handleCheck}>Sign Up</button>
                        <p className="signin-link">already have an account
                            <Link to="/login" className="link-login"> Log in</Link></p>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}
