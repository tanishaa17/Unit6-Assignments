import { createStore, combineReducers } from "redux";
import { loginReducer } from "./Login/reducer";
import { signupReducer } from "./Signup/reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer
});
export const store = createStore(rootReducer);