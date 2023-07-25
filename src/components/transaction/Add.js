import React, { useState } from "react";
import { useAddTransactionMutation } from "../../features/apiSLice";

const Add = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [
    addTransaction,
    { isLoading, isError, issuccess }
  ] = useAddTransactionMutation();
  //handle Submit:
  const handleCreate = e => {
    e.preventDefault();
    addTransaction({
      name,
      type,
      amount:Number(amount)
    });
    resetForm();
  };
  const resetForm = () => {
    setName("");
    setType("");
    setAmount("");
  };
  return (
    <div className="row">
      <div
        style={{ backgroundColor: "#ECECEC" }}
        className="mx-auto col-12 col-md-6 col-lg-6 mt-2 text-center p-1"
      >
        <p>Add new transaction</p>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            required
            className="text-center"
            placeholder="Enter transaction title"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <div className="mt-3">
            <label>Type:</label>
            <input
              className="ms-2 mt-3"
              type="checkbox"
              value="type"
              
              checked={type === "Income"}
              onChange={e => setType("Income")}
            />
            <label>Income</label>
            <input
              className="ms-2"
              type="checkbox"
              value="type"
              
              checked={type === "Expense"}
              onChange={e => setType("Expense")}
            />
            <label>Expense</label>
          </div>
          <div className="mt-2 mb-2">
            <input
              className="text-center"
              type="number"
              required
              placeholder="Enter amount"
              value={amount}
              onChange={e => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <button
          disabled={isLoading}
            type="submit"
            className="btn submit-bg text-light col-md-5 col-lg-5 col-5 mb-2"
          >
            Submit
          </button>
        </form>
        {!isLoading &&
          isError &&
          <p className="text-danger">There Was An Error</p>}
      </div>
    </div>
  );
};

export default Add;
