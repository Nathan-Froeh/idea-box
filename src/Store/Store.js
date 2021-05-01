/* eslint-disable no-unused-vars */

import React, {createContext, useReducer} from "react";
import { reducer } from "./Reducer"


const initialState = {
  ideas: [{title: 'test title 1', message: 'test message 1'}]
}

export const Context = createContext(initialState);


export const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <Context.Provider value={{state, dispatch}}>
          {children}
      </Context.Provider>
  )
};