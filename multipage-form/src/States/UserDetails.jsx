import React from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../Contexts/RegistrationContext";


export const UserDetails = () => {
    const { Name, Age, DOB, dispatch } = React.useContext(RegistrationContext)
    const navigate = useNavigate();
    // useEffect(() => {
    //     getData();
    // })
    // const getData = () => {
    //     axios.get("http://localhost:8080/registration/one").then((res) => {
    //         setUserData(res.data)
    //     })
    // }
    return (
        <>
            <h1>Registration Form</h1>
            <form action="">
                <label htmlFor="">Name : </label>
                <input type="text" placeholder="Enter Your Name" value={Name} onChange={(e) => {
                    dispatch({ type: "CHANGE_NAME", payload: e.target.value })
                }} /><br />
                <label htmlFor="">Age : </label>
                <input type="number" placeholder="Enter Your Age" value={Age} onChange={(e) => {
                    dispatch({ type: "CHANGE_AGE", payload: e.target.value })
                }} /><br />
                <label htmlFor="">Date of Birth : </label>
                <input type="date" placeholder="dd/mm/yyyy" value={DOB} onChange={(e) => {
                    dispatch({ type: "CHANGE_DOB", payload: e.target.value })
                }} />
                <button disabled={!Name && !Age && !DOB}
                    onClick={() => {
                        navigate("registration/two");
                    }}>Next</button>
            </form>
        </>
    )
}