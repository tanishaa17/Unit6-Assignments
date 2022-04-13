import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { loginReducer } from "./Login/reducer";
import { signupReducer } from "./Signup/reducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer
});
export const store = createStore(rootReducer, enhancer);