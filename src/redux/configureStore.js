import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";

// This file is used to configure our store to use of the initial state as well as the 
// reducer function. We create the redux store using the createStore() function, a function coming from the 
// redux package
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }), applyMiddleware(thunk, logger)
    );
    return store;
};