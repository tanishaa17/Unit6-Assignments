import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

export const Home = () => {
    const { isAuthenticated } = useSelector((state) => state.login)
    if (!isAuthenticated) {
        <Navigate to="/login" />
    }
    // console.log(token);
    return (
        <div>
            <h2>Home</h2>
            <h3>If you have an account, please <Link to={"/login"}>Login</Link></h3>
            <h3>Don't have a Hunger Game account? <Link to={"/signup"}>Sign Up</Link></h3>
        </div>

    )
}
