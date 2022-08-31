import React, { useState } from 'react';
import './ExpenseForm.css';

// props came from NewExpense component
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(''); // you can have multiple slices for each entry
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // or you can use just 1 useState
    // useState( {
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate:''
    // });
    const titleChangeHandler = (event) => {   
          // event is an object which gets created once onChange was trigered (something was entered)
        setEnteredTitle(event.target.value); // event.target.value allows us to access whatever was entered and stored in object 
                                            // we are saving whatever was entered symbol by symbol on each change
    };

    const amountChangeHandler = (event) => {
      // in case if you use new useState for each input
      setEnteredAmount(event.target.value);
    // in case you use 1 useState for all inputs. You have to make sure you don't lose values for other fields. You have to resave them
    //   setUserInput({
    //     ...userInput,  // this technically works, but this is not the best practise
    //     enteredAmount: event.target.value,
    //});
    //Alternativly if you depend on previouse state you should use this:
    //This was is better becasue react schedules updates for values and in this approach it guaraties that the most up to date values will be used 
    // setUserInput((prevState) =>{
    //     return { ...prevState, enteredTitle:event.target.value}
    // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // this is to prvent default behavior once button clicked (page won't reload)
        // building new expense object since we used individual useState for each entry
        const expenseData = {
            title: enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);

        props.onSaveExpenseData(expenseData); // we sent prop from NewExpense Component and here when submitHandler is executed, we execute this function as well
                                    // even though it's defined in NewExpense component. There we passed the fucntion to Form element with onSave={onSaveExpData}
        setEnteredTitle(''); // clearing form/ setting value to empty string. It's called @ WAY BINDING. in <input> we add atribute "value={ennteredTitle}", which is now an empty string
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
          </div>
        </div>
        <div className="new_expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
      </form>
    );
};

export default ExpenseForm;