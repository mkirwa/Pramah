import React, {createContext, useReducer} from 'react';
import loadsInitiaState from './initialsStates/loadsInitiaState';
import authInitialState from './initialsStates/authState';
import auth from './reducers/auth';
import loads from './reducers/loads';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) =>{

    const [authState, authDispatch] = useReducer(auth, authInitialState)
    const [loadState, loadsDispatch] = useReducer(loads, loadsInitiaState);
    return <GlobalContext.Provider 
    value={{authState, loadState, authDispatch, loadsDispatch}}>
        {children}
    </GlobalContext.Provider>
}
export default GlobalProvider
