import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import { cityDetails } from '../Redux/City/action'

export const City = () => {
    // const cityName = useSelector((store) => store.cityName)
    const dispatch = useDispatch()
    const [city, setCity] = useState({
        cityName: "",
        population: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(cityDetails(city));

    }
    const handleChange = (e) => {
        let { className, value } = e.target;
        setCity({ ...city, [className]: value })
    }
    return (
        <div className="cityForm">
            <div>City</div>
            <form action="">
                <input onChange={handleChange} className="cityName" type="text" placeholder='Enter City' />
                <input onChange={handleChange} className="population" type="number" placeholder='Enter Population' />
                <Button onSubmit={handleSubmit} variant="contained">Add City</Button>
            </form>
        </div>
    )
}
