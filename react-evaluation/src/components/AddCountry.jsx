import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { AddCountry } from "../cityCountry/action"
export const AddCountryy = () => {

    const data = useSelector((state) => state.cityCountry)
    console.log(data);
    const [country, setCountry] = useState({
        country: ""
    })
    console.log(country)

    const dispatch = useDispatch()
    const addcountry = () => {
        dispatch(AddCountry(country.country))
        alert("Country Added")
    }
    const handleChange = (e) => {
        let { className, value } = e.target
        setCountry({ ...country, [className]: value })
    }
    return <>
        <h2>Add Country</h2>
        <input type="text" placeholder="enter country" className='country' onChange={handleChange} />
        <br /> <br />
        <Button variant="contained" onClick={addcountry} color='error'>
            Add Country
        </Button>
    </>
}