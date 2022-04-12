import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";

const initState = {
    loading: false,
    isAuthenticated: false,
    token: "",
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
                isAuthenticated: true,
                token: payload,
                error: false
            };
        case LOGIN_FAILURE:
            return {
                error: true,
                isAuthenticated: false
            };
        default:
            return store;
    }
}
