/** @format */
import "ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digits" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.Title} </h2>
        <div className="expense-item__price">${props.Amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
