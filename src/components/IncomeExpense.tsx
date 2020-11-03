import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const IncomeExpense = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((tran: Transaction) => {
    return tran.amount;
  });
  const incomeSum = amounts
    .filter((item: number) => item > 0)
    .reduce((prev: number, next: number) => {
      return (prev += next);
    }, 0)
    .toFixed(2);

  const expenses = amounts
    .filter((item: number) => item < 0)
    .reduce((prev: number, next: number) => {
      return (prev += next);
    }, 0)
    .toFixed(2);

  return (
    <div className="inc-exp">
      <div className="inc">
        <h3>INCOME</h3>
        <h3>${incomeSum}</h3>
      </div>
      <div className="exp">
        <h3>EXPENSE</h3>
        <h3>${Math.abs(expenses).toFixed(2)}</h3>
      </div>
    </div>
  );
};
