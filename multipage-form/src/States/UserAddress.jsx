import React, { useEffect, useState } from "react";
import axios from "axios";
export const UserAddress = () => {
    const [addressDetails, setAddressDetails] = useState({
        State: "",
        Address: "",
        Pincode: ""
    })
    useEffect(() => {
        getAddress();
    })
    const getAddress = () => {
        axios.get("http://localhost:8080/registration/two").then((res) => {
            setAddressDetails(res.data)
        })
    }
    return (
        <>
            <h1>Address Details</h1>
            <form action="">
                <label htmlFor="">State : </label>
                <input type="text" placeholder="Enter Your State" /><br />
                <label htmlFor="">Address : </label>
                <input type="text" placeholder="Enter Your Address" /><br />
                <label htmlFor="">Pincode : </label>
                <input type="number" placeholder="Enter Your Pincode" />
            </form>
        </>
    )
}