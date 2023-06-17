import React from "react";
import { useGettAllTransactionsQuery } from "../features/apiSLice";

const Balance = () => {
  const { data: transactions } = useGettAllTransactionsQuery();
//  let a;
//  transactions.forEach(t=>{
//   const {type}= t;
// console.log(type)
//  })
  return (
    <div>
      <div className="w-50 bg-primary mt-5 mx-auto text-light p-3 text-center">
        <div className="">
          <div>
            <h5>Expense Tracker</h5>

            <p>Your Current Balance</p>
            <h4> Tk   </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
