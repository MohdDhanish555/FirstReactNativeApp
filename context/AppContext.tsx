import React from "react";
import { createContext, useReducer } from "react";
import { initState, reducer } from "./reducer";

type Props = {
  children: JSX.Element;
};

const defaultValue = {
  state: initState,
  dispatch: () => initState,
};

export const AppContext = createContext<any>(defaultValue);

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
