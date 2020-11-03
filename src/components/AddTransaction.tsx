import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<any>(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form className="form-container">
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
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="add-btn">Add transaction</button>
      </form>
    </>
  );
};
