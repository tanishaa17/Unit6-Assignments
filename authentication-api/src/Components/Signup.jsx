import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export const Signup = () => {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        display_name: "",
        email: "",
        password: "",
    })

    return (
        <div className="signupContainer">
            <div className="signupBox">
                <h4>Sign Up</h4>
                <form action="" className="signupForm">
                    <div>
                        <select name="country *" id="country" className="signTextbox">
                            <option value="countryName">Bangladesh</option>
                            <option value="countryName" selected >India</option>
                            <option value="countryName">China</option>
                            <option value="countryName">Kuwait</option>
                            <option value="countryName">Japan</option>
                            <option value="countryName">United States</option>
                            <option value="countryName">United Kingdom</option>
                            <option value="countryName">Afganistan</option>
                            <option value="countryName">Indonesia</option>
                            <option value="countryName">Iraq</option>
                            <option value="countryName">Israel</option>
                            <option value="countryName">Hungary</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" id="first_name" className="signTextbox" placeholder="First Name *" value={form.first_name} />
                        <input type="text" id="last_name" className="signTextbox" placeholder="Last Name *" value={form.last_name} />
                    </div>
                    <div>
                        <input type="text" id="display_name" className="signTextbox" placeholder="Display Name *" value={form.display_name} />
                    </div>
                    <div>
                        <input type="email" id="email" className="signTextbox" placeholder="Email Address *" value={form.email} />
                    </div>
                    <div>
                        <input type="password" id="password" className="signTextbox" placeholder="Password *" value={form.password} />
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