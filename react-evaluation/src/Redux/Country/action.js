import axios from "axios";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch()
export const ADD_COUNTRY_LOADING = "ADD_COUNTRY_LOADING";
export const ADD_COUNTRY_SUCCESS = "ADD_COUNTRY_SUCCESS";
export const ADD_COUNTRY_FAILED = "ADD_COUNTRY_FAILED";


const countryLoading = () => ({
    type: ADD_COUNTRY_LOADING
})
const countryadded = () => ({
    type: ADD_COUNTRY_SUCCESS
})
const countryFailed = (error) => ({
    type: ADD_COUNTRY_FAILED,
    payload: error
})

export const countryDetails = () => {
    return (dispatch) => {
        dispatch(countryLoading());
        axios.post("http://localhost:8080/add-country").then((res) => {
            console.log(res.data);
            alert("Country added successfully!");
            dispatch(countryadded());
        }).catch((err) => {
            dispatch(countryFailed(err.message));
        })
    }
}