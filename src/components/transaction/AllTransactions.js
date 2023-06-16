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
    content = <div>Something went wrong....</div>;
  }
  if (!isLoading && !isError && transactions.length > 0) {
    content = transactions.map(t => <ViewAllTransactions key={t.id} all={t} />);
  }
  return (
    <div className="w-50 mx-auto mt-4">
      <h5 className="text-center">Your Transactions</h5>

      {content}
    </div>
  );
};

export default AllTransactions;
