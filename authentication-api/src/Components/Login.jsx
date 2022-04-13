import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginLoading, loginSuccess } from "../Redux/Login/action";
import axios from "axios";

export const Login = () => {
    const dispatch = useDispatch;
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginLoading());
        axios.post("http://loca;host:8080/users", userData).then((res) => {
            alert("Logged in successfully");
            dispatch(loginSuccess(res.token));
            navigate("/");
        }).catch((err) => {
            alert("Invalid Credentials. Try Again");
            dispatch(loginFailure())
        })
    }
    const handleChange = (e) => {
        let [id, value] = e.target;
        setUserData({ ...userData, [id]: value });
    }

    return (
        <div className="loginContainer">
            <div className="loginBox">

                <h4>Sign in with Hunger Games Account</h4>
                <form onClick={handleSubmit} action="" className="loginForm">
                    <div>
                        <input onChange={handleChange} type="text" className="textBox" name="email" id="email" placeholder="Email Address" />
                    </div>
                    <div>
                        <input onChange={handleChange} type="password" className="textBox" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="options">
                        <label className="rememberme" htmlFor="remember">
                            <span className="checkbox">
                                <input type="checkbox" className="checked" />
                            </span>
                            Remember me</label>
                        <span className="forgotPass">Forgot Your Password</span>
                    </div>
                    <input className="loginbtn" type="submit" value="LOG IN NOW" />
                    {/* <button className="loginbtn" type="submit" >LOG IN</button> */}
                    <div className="privacy">Privacy Policy</div>
                </form>
                <div className="dontHaveAcnt">Don't have an Hunger Games Account? <Link to="/signup"><span className="under">Sign up</span></Link></div>
            </div>
        </div>
    )
}

