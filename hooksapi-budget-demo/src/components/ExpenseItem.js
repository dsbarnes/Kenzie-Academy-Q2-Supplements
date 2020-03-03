import React from "react";

export default function ExpenseItem({ expense, handleDelete, handleEdit }) {
  const { id, charge, amount } = expense;

  return (
    <React.Fragment>
      <li className="item">
        <div className="info">
          <span className="expense">{charge}</span>
          <span className="amount">$ {amount}</span>
        </div>

        <div>
          <button 
            className="edit-btn" 
            aria-label="edit button"
            onClick={ () => { handleEdit(id) }}
        >
            EDT
          </button>

          <button 
            className="clear-btn" 
            aria-label="delete button"
            onClick = { () => { handleDelete(id) }}
        >
            CLR
          </button>

        </div>
      </li>
    </React.Fragment>
  );
}
