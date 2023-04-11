// setup data layer
// to track the basket

import { createContext, useContext, useReducer } from "react";

// the data layer
export const StateContext = createContext();

// the provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);