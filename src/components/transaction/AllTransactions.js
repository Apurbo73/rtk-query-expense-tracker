import React from "react";
import { useGettAllTransactionsQuery } from "../../features/apiSLice";
import ViewAllTransactions from "./ViewAllTransactions";

const AllTransactions = () => {
  const {
    data: transactions,
    isLoading,
    isError,
    error
  } = useGettAllTransactionsQuery();
  //decide what to render:
  let content = null;
  if (isLoading) {
    content = <div>Loading....</div>;
  }
  if (!isLoading && isError) {
    content = <div>No Transaction Found....</div>;
  }
  if (!isLoading && !isError && transactions.length > 0) {
    content = transactions.map(t => <ViewAllTransactions key={t.id} all={t} />);
  }
  return (
    <div className="  mt-4 ">
      <h5 className="text-center">Your Transactions</h5>
      <div className="row">
      <div className="col-md-6 col-lg-6 mx-auto ">
        {content}
      </div>
      </div>
     
    </div>
  );
};

export default AllTransactions;
