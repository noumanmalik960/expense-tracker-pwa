import React from "react";
import "./App.styles.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  );
}

export default App;
