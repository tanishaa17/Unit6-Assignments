import { ADD_CITY_FAILED, ADD_CITY_LOADING, ADD_CITY_SUCCESS } from "./action";

const initState = {
    loading: false,
    cityName: {},
    error: ""
}
export const cityReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADD_CITY_LOADING:
            return {
                ...store,
                loading: true,
                cityName: {},
                error: ""
            }
        case ADD_CITY_SUCCESS:
            return {
                ...store,
                loading: false,
                cityName: payload.city,
                error: ""
            }
        case ADD_CITY_FAILED:
            return {
                ...store,
                loading: true,
                cityName: {},
                error: payload.error
            }

        default:
            store;
    }
}