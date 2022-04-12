import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Home = () => {
    const { isAuthenticated, token } = useSelector((state) => state.login)
    if (!isAuthenticated) {
        <Navigate to="/login" />
    }
    // console.log(token);
    return (
        <h2>Home</h2>

    )
}
