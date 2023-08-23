import React, { useState } from "react";
import ExpenseList from "../expenses/ExpenseList";
import NewExpense from "../newexpenses/NewExpense";

const ShowExpenses = () => {
  const [expenses, setExpenses] = useState("");

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
};

export default ShowExpenses;
