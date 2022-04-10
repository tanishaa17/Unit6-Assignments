import React from "react";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import { Navigate } from "react-router-dom";
export const UserAddress = () => {
    const { dispatch, Name, Age, DOB, StateOfResidence, Address, Pincode, handleSubmit } = React.useContext(RegistrationContext);
    // useEffect(() => {
    //     getAddress();
    // })
    // const getAddress = () => {
    //     axios.get("http://localhost:8080/registration/two").then((res) => {
    //         setAddressDetails(res.data)
    //     })
    // }
    if (!Name || !Age || !DOB) {
        Navigate("registration/one")
    }
    return (
        <>
            <h1>Address Details</h1>
            <form action="">
                <label htmlFor="">State : </label>
                <input type="text" value={StateOfResidence} placeholder="Enter Your State" onChange={(e) => dispatch({ type: "CHANGE_STATE_OF_RESIDENCE", payload: e.target.value })} /><br />
                <label htmlFor="">Address : </label>
                <input type="text" value={Address} placeholder="Enter Your Address" onChange={(e) => dispatch({ type: "CHANGE_ADDRESS", payload: e.target.value })} /><br />
                <label htmlFor="">Pincode : </label>
                <input type="number" value={Pincode} placeholder="Enter Your Pincode" onChange={(e) => dispatch({ type: "CHANGE_PINCODE", payload: e.target.value })} />
                <button disabled={!StateOfResidence || !Address || !Pincode}
                    onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}