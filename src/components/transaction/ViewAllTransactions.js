import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteTransactionMutation } from "../../features/apiSLice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../style/style.css";
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
      <div className={`${type} `}>
        <div className="row mb-2">
          <div className=" d-flex flex-wrap">
            <p className="col-lg-2 col-md-2 col-12 m-2 text-center">
              {type}
            </p>
            <p className="col-lg-2 col-md-2 col-12 m-2 text-center">
              {name}
            </p>
            <p className="col-lg-2 col-md-2 col-12 m-2 text-center">
              {amount} Tk
            </p>

            <button
              className="btn btn-outline-dark m-2  col-lg-2 col-md-2 col-12 text-center"
              onClick={handleDelete}
            >
              {/* <i className="fa-solid fa-trash-can " /> */} Delete
            </button>

            <Link
              to={`/transactions/edit/${id}`}
              className="btn btn-outline-dark  m-2 col-12 col-lg-2 col-md-2"
            >
              {/* <i className="fa-sharp fa-solid fa-pencil " /> */} Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllTransactions;
