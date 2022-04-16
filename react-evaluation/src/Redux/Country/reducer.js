import { ADD_COUNTRY_FAILED, ADD_COUNTRY_LOADING, ADD_COUNTRY_SUCCESS } from "./action"

const initState = {
    loading: false,
    country: {},
    error: ""
}
export const countryReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADD_COUNTRY_LOADING:
            return {
                ...store,
                loading: true,
                country: {},
                error: ""
            }
        case ADD_COUNTRY_SUCCESS:
            return {
                ...store,
                loading: false,
                country: payload.country,
                error: ""
            }
        case ADD_COUNTRY_FAILED:
            return {
                ...store,
                loading: true,
                country: {},
                error: payload.error
            }

        default:
            store;
    }
}