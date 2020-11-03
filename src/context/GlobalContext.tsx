import React, { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

const initialState: TransactionType = {
  transaction: [],
};

export const GlobalContext: React.Context<any> = createContext({});

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTransaction = (newTransaction: Transaction) => {
    dispatch({
      type: "ADD",
      payload: newTransaction,
    });
  };

  const deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
