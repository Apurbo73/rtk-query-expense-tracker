import React from "react";
import EditForm from "./EditForm";
import { useSingleTransactionQuery } from "../../features/apiSLice";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const { data: transactions, isLoading, isError } = useSingleTransactionQuery(
    id
  );
  let content = null;
  if (!isLoading && !isError && transactions.id) {
    content = (
      <div>
        <EditForm t={transactions} />
      </div>
    );
  }
  return (
    <div className="w-25 mx-auto mt-5">
      <h5 className="text-center mb-4">Edit Transaction Details</h5>
      {content}
    </div>
  );
};

export default Edit;
