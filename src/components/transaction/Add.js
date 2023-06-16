import React from "react";

const Add = () => {
  return (
    <div>
      <div style={{backgroundColor:'#ECECEC'}} className="mx-auto w-50 mt-2 text-center p-1">
        <p>Add new transaction</p>
        <input
          type="text"
          className="text-center"
          placeholder="Enter transaction title"
        />
        <div className="mt-3">
          <label>Type:</label>
          <input className="ms-2 mt-3" type="checkbox" />
          <label>Income</label>
          <input className="ms-2" type="checkbox" />
          <label>Expense</label>
        </div>
        <div className="mt-2 mb-2">
          <input className="text-center" type="number" name="" id="" placeholder="Enter amount" />
        </div>
        <button className="btn btn-primary text-light w-50 mb-2">Submit</button>
      </div>
    </div>
  );
};

export default Add;
