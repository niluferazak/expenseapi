import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">RS {props.amount}/-</div>
        </div>
      </div>
    </li>
  );
}
export default ExpenseItems;
