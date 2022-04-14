import React from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";;
export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
const signupLoading = () => ({
    type: SIGNUP_LOADING
});
const signupSuccess = (payload) => ({
    type: SIGNUP_SUCCESS
});
const signupFailure = () => ({
    type: SIGNUP_FAILURE
});

// const dispatch = useDispatch();

export const userSignup = (form) => {
    // const [userData, setUserData] = useState({
    //     email: "",
    //     password: "",
    // });
    return (dispatch) => {
        dispatch(signupLoading());
        axios.post("http://loca;host:8080/signup", form).then((res) => {
            alert("User Registered successfully");
            dispatch(signupSuccess(res.token));
            // navigate("/login");
        }).catch((err) => {
            dispatch(signupFailure());
        })
    }
}
