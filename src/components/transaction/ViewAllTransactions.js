import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteTransactionMutation } from "../../features/apiSLice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  '../../style/style.css'
const ViewAllTransactions = ({ all }) => {
  const navigate = useNavigate();
  const { name, type, amount, id } = all;
  const [
    deleteTransaction,
    { isLoading, isError, error, isSuccess }
  ] = useDeleteTransactionMutation();
  //handle Delete:
  const handleDelete = e => {
    e.preventDefault();
    toast(`${name} is deleted..`);

    deleteTransaction(id);
  };
  //   useEffect(
  //     () => {
  //       {
  //         isSuccess && navigate("/");
  //       }
  //     },
  //     [isSuccess]
  //   );
  <style />;
  return (
    <div>
      <ToastContainer />
      <div className={`${type}`}>
        <div className="d-flex mx-auto w-100 text-dark mt-2 ">
          <p className="m-2 me-auto">
            {type}
          </p>
          <p className="m-2 me-auto">
            {name}
          </p>
          <p className="m-2 me-auto">
            {amount} Tk
          </p>

          <button className="btn text-dark" onClick={handleDelete}>
            <i className="fa-solid fa-trash-can" />
          </button>

          <Link to={`/transactions/edit/${id}`} className="btn text-dark">
            <i className="fa-sharp fa-solid fa-pencil" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewAllTransactions;
