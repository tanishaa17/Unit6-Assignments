import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export const Register = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/register", userData).then((res) => {
            setUserData({
                name: "",
                email: "",
                password: ""
            })
        });
    }
    const handleChange = (e) => {
        let { id, value } = e.target
        setUserData({ ...userData, [id]: value })
    }
    return (
        <div className="registerForm">
            <div>Registration Form</div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleChange} id='name' type="text" placeholder='Name' value={userData.name} />
                <input onChange={handleChange} id='email' type="text" placeholder='Email' value={userData.email} />
                <input onChange={handleChange} id='password' type="text" placeholder='Password' value={userData.password} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}
