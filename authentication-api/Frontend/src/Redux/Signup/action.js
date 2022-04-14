import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
const signupLoading = () => ({
    type: SIGNUP_LOADING
});
const signupSuccess = (token) => ({
    type: SIGNUP_SUCCESS,
    payload: token
});
const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error
});

// const dispatch = useDispatch();

export const userSignup = (form) => {
    // const [userData, setUserData] = useState({
    //     email: "",
    //     password: "",
    // });
    return (dispatch) => {
        dispatch(signupLoading());
        axios.post("http://loca;host:8080/signup", form).then((res) => {
            console.log("res", res);
            alert("User Registered successfully");
            dispatch(signupSuccess(res.data.token));
            // navigate("/login");
        }).catch((err) => {
            dispatch(signupFailure(err.res.data.message));
        })
    }
}
