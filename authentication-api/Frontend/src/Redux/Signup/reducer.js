import { SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./action";
const initState = {
    user: null,
    loading: false,
    isAuthenticated: false,
    error: false
}

export const signupReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case SIGNUP_LOADING:
            return {
                ...store,
                loading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...store,
                user: payload,
                isAuthenticated: true,
                error: false,
            }
        case SIGNUP_FAILURE:
            return {
                ...store,
                error: true,
                isAuthenticated: false
            }
        default:
            return store;
    }
}