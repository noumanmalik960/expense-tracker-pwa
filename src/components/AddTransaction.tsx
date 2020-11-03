import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const { addTransaction } = useContext(GlobalContext);

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTransaction({
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: amount,
    });
  };

  const updateNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = +e.target.value;
    setAmount(value);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={add} className="form-container">
        <div className="text">
          <input
            className="form-input"
            type="text"
            placeholder="Description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="amount-div">
          <input
            className="form-input"
            type="number"
            placeholder="Amount (+ or -)"
            value={amount}
            onChange={updateNumber}
          />
        </div>
        <button className="add-btn">Add transaction</button>
      </form>
    </>
  );
};
