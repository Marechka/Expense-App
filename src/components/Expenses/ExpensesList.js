import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {/*traversing an array with expenses( came as "items" from App*/}
      {props.items.map((expense) => (
        <ExpenseItem
          // must add key for better performance of react and to avoid bugs. always add it when mapping. This fixed my bug with name, but not with date
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
