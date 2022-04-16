import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import { countryDetails } from '../Redux/Country/action'

export const Country = () => {
    const dispatch = useDispatch()
    const [country, setCountry] = useState({
        country: "",
        population: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(countryDetails(country));

    }
    const handleChange = (e) => {
        let { className, value } = e.target;
        setCountry({ ...country, [className]: value })
    }
    return (
        <div className="countryForm">
            <div>Country</div>
            <form action="">
                <input onChange={handleChange} className="countryName" type="text" placeholder='Enter Country' />
                <input onChange={handleChange} className="population" type="number" placeholder='Enter Population' />
                <Button onSubmit={handleSubmit} variant="contained">Add Country</Button>
            </form>
        </div>
    )
}
