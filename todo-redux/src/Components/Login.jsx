import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {
    const [creds, setCreds] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/login").then((res) => {
            setCreds({
                email: "",
                password: ""
            })
        });
    }
    const handleChange = (e) => {
        let { id, value } = e.target
        setCreds({ ...creds, [id]: value })
    }
    return (
        <div className="loginForm">
            <div>Login Form</div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleChange} id='email' type="text" placeholder='Email' value={creds.email} />
                <input onChange={handleChange} id='password' type="text" placeholder='Password' value={creds.password} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}
