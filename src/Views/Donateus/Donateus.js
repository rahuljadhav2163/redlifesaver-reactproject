import React, { useState , useEffect } from 'react';
import './Donateus.css';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
function Donateus() {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [bloodGroup, setBloodGroup] = useState('Blood Group :');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        const existingData = JSON.parse(localStorage.getItem('donor')) || [];
    
        const newDonor = {
            name,
            mobile,
            bloodGroup,
            address,
            date,
        };
        existingData.push(newDonor);
    
        localStorage.setItem('donor', JSON.stringify(existingData));
    
        setName('');
        setMobile('');
        setBloodGroup('Blood Group :');
        setAddress('');
        setDate('');
    };


    return (

       
        <div>
             <Navbar/>
             <div className='donat-container'>
            <form className="form-containers">
                <h1 className="titile"> DONATE US</h1>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /> <br />
                <input
                    className="input-field"
                    type="text"
                    placeholder="Mob.No :"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <br />
                <br />

                <select
                    className="input-field grp"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}>
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
                <br />
                <br />

                <input
                    className="input-field"
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                <br />
                <br />
                <input
                    className="input-field"
                    type="date"
                    placeholder="Todays Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />
                <br />
                <br />

                <button type="button" className="input-btn" onClick={handleSubmit}>
                    Donate Now
                </button>
            </form></div>
            <Footer/>
        </div>
    );
}
export default Donateus;