import axios from "axios";
import React, { useEffect, useState } from "react";
export const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getData();
    })
    const getData = () => {
        axios.get("http://localhost:8080/users").then((res) => {
            setUser(res.data);
        })
    }
    return (
        <>
            <h1>User Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>State of Residence</th>
                        <th>Address</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((elem) => {
                        <tr>
                            <td>{elem.Name}</td>
                            <td>{elem.Age}</td>
                            <td>{elem.DOB}</td>
                            <td>{elem.StateOfResidence}</td>
                            <td>{elem.Address}</td>
                            <td>{elem.Pincode}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}