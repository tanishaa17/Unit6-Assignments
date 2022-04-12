export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

const signupLoading = () => ({
    type: SIGNUP_LOADING
});
const signupSuccess = (payload) => ({
    type: SIGNUP_SUCCESS
});
const signupFailure = () => ({
    type: SIGNUP_FAILURE
});