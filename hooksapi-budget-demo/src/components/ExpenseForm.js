import React from "react";

const ExpenseForm = ({
    charge, 
    amount, 
    handleCharge, 
    handleAmount, 
    handleSubmit, 
    edit
  }) =>
{
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">charge</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder=" example: 'rent' "
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder=" example: '100' "
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          {edit === true ? 'edit' : 'submit'}
        </button>
      </form>
    </React.Fragment>
  );
}
export default ExpenseForm