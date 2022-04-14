import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div>Don't have an account? <Link to={"/register"}>Register</Link></div>
            <div>Login here<Link to={"/login"}>Login</Link></div>
            <div>Todo</div>
        </div>
    )
}
