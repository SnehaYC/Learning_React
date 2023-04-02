/** @format */
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>{props.Title} </h2>
        <div className="expense-item__price">${props.Amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
