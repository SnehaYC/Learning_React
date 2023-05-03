/** @format */
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "ExpenseItem.css";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>{props.Title} </h2>
        <div className="expense-item__price">${props.Amount}</div>
      </div>
      <button onClick={clickHandler}>Change Tilte</button>
    </Card>
  );
}

export default ExpenseItem;
