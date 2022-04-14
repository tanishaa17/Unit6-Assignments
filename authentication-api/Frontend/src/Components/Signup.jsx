import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { userSignup } from "../Redux/Signup/action";
import "./Signup.css";

export const Signup = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        display_name: "",
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userSignup(form));
        setForm({
            first_name: "",
            last_name: "",
            display_name: "",
            email: "",
            password: "",
        });
    }
    const handleChange = (e) => {
        setForm(...form, e.target.value);
    }
    if (isAuthenticated) {
        <Navigate to="/login" />
    }

    return (
        <div className="signupContainer">
            <div className="signupBox">
                <h4>Sign Up</h4>
                <form action="" className="signupForm" onSubmit={handleSubmit}>
                    <div>
                        <input onChange={handleChange} type="text" id="first_name" className="signTextbox" placeholder="First Name *" value={form.first_name} />
                        <input onChange={handleChange} type="text" id="last_name" className="signTextbox" placeholder="Last Name *" value={form.last_name} />
                    </div>
                    <div>
                        <input onChange={handleChange} type="text" id="display_name" className="signTextbox" placeholder="Display Name *" value={form.display_name} />
                    </div>
                    <div>
                        <input onChange={handleChange} type="email" id="email" className="signTextbox" placeholder="Email Address *" value={form.email} />
                    </div>
                    <div>
                        <input onChange={handleChange} type="password" id="password" className="signTextbox" placeholder="Password *" value={form.password} />
                    </div>
                    <div className="tncCheck">
                        <input type="checkbox" className="tncCheckbox1" />
                        <span><label htmlFor="tncs">
                            I would like to receive news, surveys and special offers from Epic Games</label></span>
                    </div>
                    <div className="tncCheck">
                        <input type="checkbox" className="tncCheckbox2" />
                        <span><label htmlFor="tncs">
                            I have read and agree to the <span className="underline">terms of service</span></label></span>
                    </div>
                    {/* <button className="signupBtn" onSubmit={handleSubmit}>CONTINUE</button> */}
                    <input type="submit" value="CONTINUE" className="signupBtn" />
                    <p className="pripolicy">Privacy Policy</p>
                </form>
                <p className="haveacnt">Have a Hunger Games Account?<Link to='/login'> <span className="underline">Sign In</span></Link></p>
            </div>
        </div >
    )
}