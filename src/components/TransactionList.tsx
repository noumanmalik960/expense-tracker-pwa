import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <h3 className="history-heading">History</h3>
      <ul className="list">
        {transaction.map((tran: Transaction) => {
          return <Transaction transaction={tran} key={tran.id} />;
        })}
      </ul>
    </>
  );
};
