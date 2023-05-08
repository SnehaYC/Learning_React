/** @format */

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // 1st Way
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // 2nd way
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enreredDate: "",
  //   }); //passing object as a value

  const titleChangeHandler = (event) => {
    //1st way
    setEnteredTitle(event.target.value);
    //2nd way
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //3rd way
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,enteredTitle:event.target
    //     }
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-05-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expenes__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
