import React from "react";
import { useGettAllTransactionsQuery } from "../features/apiSLice";

const Balance = () => {
  const { data: transactions } = useGettAllTransactionsQuery();
  const total = transactions => {
    let income = 0;

    {
      transactions &&
        transactions.forEach(t => {
          const { type, amount } = t;
          if (type === "Income") {
            income = income + amount;
          }
          if (type === "Expense") {
            income = income - amount;
          }
        });
    }
    return income;
  };

  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 col-12 balance-bg mt-3 mx-auto text-light p-3 text-center">
        <h5>Expense Tracker</h5>

        <p>Your Balance</p>
        <h4>
          {total(transactions)} Taka
        </h4>
      </div>
    </div>
  );
};

export default Balance;
