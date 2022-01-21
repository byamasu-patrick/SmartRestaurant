import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

// This file is used to configure our store to use of the initial state as well as the 
// reducer function. We create the redux store using the createStore() function, a function coming from the 
// redux package
export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}