import React, { useEffect, useState } from "react";
import axios from "axios";
export const UserDetails = () => {
    const [userData, setUserData] = useState({
        Name: "",
        Age: "",
        DOB: ""
    })
    useEffect(() => {
        getData();
    })
    const getData = () => {
        axios.get("http://localhost:8080/registration/one").then((res) => {
            setUserData(res.data)
        })
    }
    return (
        <>
            <h1>Registration Form</h1>
            <form action="">
                <label htmlFor="">Name : </label>
                <input type="text" placeholder="Enter Your Name" /><br />
                <label htmlFor="">Age : </label>
                <input type="number" placeholder="Enter Your Age" /><br />
                <label htmlFor="">Date of Birth : </label>
                <input type="date" placeholder="dd/mm/yyyy" />
                <button>Next</button>
            </form>
        </>
    )
}