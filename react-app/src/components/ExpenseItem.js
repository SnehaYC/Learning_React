/** @format */
import "ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.Date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.Title} </h2>
        <div className="expense-item__price">${props.Amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
