import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

type Props = {
  transaction: Transaction;
};

export const Transaction: React.FC<Props> = ({ transaction }) => {
  const sign: string | undefined = transaction.amount < 0 ? "-" : undefined;

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li
      onClick={() => deleteTransaction(transaction.id)}
      className={transaction.amount < 0 ? "minus" : "plus"}
    >
      {transaction.text}{" "}
      <span className="li-span">
        {sign}${Math.abs(transaction.amount)}
      </span>
    </li>
  );
};
