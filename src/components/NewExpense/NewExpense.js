import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // this function will be called and executed when form is saved in ExpenseForm. we are passing pointer to the function via props
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);

    const expenseData = {
      ...enteredExpenseData, // coping values from entered data in obkect from expenseForm
      id: Math.random().toString(), // assigning new ID
    };
    console.log(expenseData);
    props.onAddExpense(expenseData); // we are calling function defined in App here to see we passed data to App successfully
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  // onSaveExpenseData doesn't have to be named this way, just following convetion. Creating our prop(function). Will be triggeered when data is saved
  // we are trying to move data from ExpenseForm to NewExpense and then to App
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Wxpense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
