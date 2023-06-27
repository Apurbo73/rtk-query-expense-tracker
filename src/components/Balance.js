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
    <div>
      <div className="w-50 bg-primary mt-5 mx-auto text-light p-3 text-center">
        <div className="">
          <div>
            <h5>Expense Tracker</h5>

            <p>Total Transactions</p>
            <h4>
              Tk {total(transactions)}
            </h4>
            {/* {total(transactions)<0 && <p className="text-danger bg-light w-25 p-2 mx-auto">Expense More Than Income</p>}
            {total(transactions)>0 && <p className="text-light bg-success w-25 p-2 mx-auto">Income Is Raising</p>} */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
