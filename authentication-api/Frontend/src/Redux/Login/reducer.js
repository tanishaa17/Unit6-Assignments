import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_USER, SET_ERROR_EMPTY } from "./action";

const initState = {
    user: "",
    loading: false,
    isAuthenticated: false,
    error: false
}
export const loginReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...store,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...store,
                isAuthenticated: true,
                user: payload,
                error: false,
            };
        case LOGIN_FAILURE:
            return {
                ...store,
                error: true,
                isAuthenticated: false
            };
        case LOGOUT_USER:
            return {
                ...store,
                user: "",
                isAuthenticated: false
            };
        case SET_ERROR_EMPTY:
            return {
                ...store,
                error: "",
                isAuthenticated: false
            };
        default:
            return store;
    }
}
