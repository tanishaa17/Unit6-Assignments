import axios from "axios";
// import { useDispatch } from "react-redux";
export const ADD_CITY_LOADING = "ADD_CITY_LOADING";
export const ADD_CITY_SUCCESS = "ADD_CITY_SUCCESS";
export const ADD_CITY_FAILED = "ADD_CITY_FAILED";

const cityLoading = () => ({
    type: ADD_CITY_LOADING
})
const cityadded = () => ({
    type: ADD_CITY_SUCCESS
})
const cityFailed = (error) => ({
    type: ADD_CITY_FAILED,
    payload: error
})

export const cityDetails = (city) => {
    // const dispatch = useDispatch()
    return (dispatch) => {
        dispatch(cityLoading());
        axios.post("http://localhost:8080/add-city", city).then((res) => {
            console.log(res.data);
            alert("City added successfully!");
            dispatch(cityadded());
        }).catch((err) => {
            dispatch(cityFailed(err.message));
        })
    }
}