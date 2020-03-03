import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({
  expenses,
  handleDelete,
  handleEdit,
  handleClearExpenses
}) 
{
  return (
    <React.Fragment>
      <React.Fragment>
        <ul className="list">
          {expenses.map(expense => {
            return (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleClearExpenses={handleClearExpenses}
              />
            );
          })}
        </ul>

        {expenses.length > 0 && (
          <button className="btn" onClick={handleClearExpenses}>
            Clear Expenses
          </button>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
