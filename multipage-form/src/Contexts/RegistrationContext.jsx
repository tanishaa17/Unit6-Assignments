import axios from "axios";
import React from "react";
export const RegistrationContext = React.createContext();
const initState = {
    Name: "",
    Age: "",
    DOB: "",
    StateOfResidence: "",
    Address: "",
    Pincode: ""
}
const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return { ...state, Name: action.payload };
        case "CHANGE_AGE":
            return { ...state, Age: action.payload };
        case "CHANGE_DOB":
            return { ...state, DOB: action.payload };
        case "CHANGE_StateOfResidence":
            return { ...state, StateOfResidence: action.payload };
        case "CHANGE_Address":
            return { ...state, Address: action.payload };
        case "CHANGE_Pincode":
            return { ...state, Pincode: action.payload };
        default:
            throw new Error();
    }
}
export const RegistrationContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initState);

    const handleSubmit = () => {
        axios.post("http://localhost:8080/users", state).then((res) => {
            console.log(res.data);
        })
    }
    const { Name, Age, DOB, StateOfResidence, Address, Pincode } = state;
    return (
        <RegistrationContext.Provider value={{ Name, Age, DOB, StateOfResidence, Address, Pincode, dispatch, handleSubmit }}>
            {children}
        </RegistrationContext.Provider>
    )
}