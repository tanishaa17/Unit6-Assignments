// ACTION TYPE
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate()
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// ACTION CREATOR
export const loginLoading = () => ({
    type: LOGIN_LOADING
})
export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token
})
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
})

export const userLogin = (userData) => {
    return (dispatch) => {
        dispatch(loginLoading());
        axios.post("http://loca;host:8080/login", userData).then((res) => {
            console.log("res", res)
            alert("Logged in successfully");
            dispatch(loginSuccess(res.access_token));
            // navigate("/");
        }).catch((err) => {
            alert("Invalid Credentials. Try Again");
            dispatch(loginFailure(err.message))
        })
    }
}