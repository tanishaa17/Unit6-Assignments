import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { cityReducer } from "./City/reducer";
import { countryReducer } from "./Country/reducer";
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const middleware = [thunk];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

export const rootReducer = combineReducers({
    country: countryReducer,
    city: cityReducer
})
export const store = createStore(rootReducer, enhancer);