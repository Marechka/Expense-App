import React from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    // this function will be called and executed when form is saved in ExpenseForm. we are passing pointer to the function via props
    const saveExpenseDataHandler = (eneteredExpenseData) => {
        const expenseData = {
            ...eneteredExpenseData, // coping values from entered data in obkect from expenseForm
            id: Math.random().toString() // assigning new ID
        };
        console.log(expenseData);
        props.onAddExpense(expenseData); // we are calling function defined in App here to see we passed data to App successfully
        };
    // onSaveExpenseData doesn't have to be named this way, just following convetion. Creating our prop(function). Will be triggeered when data is saved
    // we are trying to move data from ExpenseForm to NewExpense and then to App
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
        </div>
    )

};

export default NewExpense;