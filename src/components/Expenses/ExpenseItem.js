import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// function ExpenseItem(props) {
  const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); /// must be called inside the function right here. 
                                                      // returns 2 values: current value itself and a function to update value
  
    // naming convention. End with "Handler" to show it's a function used when something is clicked and function is not used by us in code somewhere
    const clickHandler = () => {
      setTitle('Updated');  // updating title. This function will make component to revaluate itself, JSX in return will evalute again and title will be changed
                            // change is "scheduled", so you won't see change right away 
      console.log(title);   // that's why when you run console log right away you stll see old title, it doesn't change right away
    }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* <h2>{props.title}</h2>     since now we use title from useState, can take of "props*/}
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change button</button>
      </Card>
    </li>
    // "on" prop wants function which specify what happens in case of event
    // in our case we put logic into variable and pass a pointer to it in onCllick
  );
}

export default ExpenseItem;
