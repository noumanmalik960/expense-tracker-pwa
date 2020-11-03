import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((t: Transaction) => t.amount);

  const sum = amounts.reduce((prev: number, next: number) => prev + next, 0);

  const sign = sum < 0 ? "-" : undefined;

  return (
    <div className="balance">
      <h3>Current Balance</h3>
      <h1>
        {sign}${Math.abs(sum).toFixed(2)}
      </h1>
    </div>
  );
};
