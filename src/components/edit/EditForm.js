import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateTransactionMutation } from "../../features/apiSLice";

const EditForm = ({ t }) => {
  const navigate = useNavigate();
  const { name: initialName, type: initialType, amount: initialAmount, id } = t;
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [amount, setAmount] = useState(initialAmount);
  const [
    updateTransaction,
    { isLoading, isError, isSuccess }
  ] = useUpdateTransactionMutation();
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    updateTransaction({
      id,
      data: {
        name,
        type,
        amount
      }
    });
  };
  useEffect(
    () => {
      {
        isSuccess && navigate("/");
      }
    },
    [isSuccess]
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Enter Title"
            className="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <input
            type="text"
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
            placeholder="Enter Type"
            className="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <input
            type="number"
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
            placeholder="Enter Amount"
            className="form-control mb-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-2">
          Submit
        </button>
      </form>
      <Link to="/" type="submit" className="btn btn-warning w-100">
        Back To Home
      </Link>
    </div>
  );
};

export default EditForm;
