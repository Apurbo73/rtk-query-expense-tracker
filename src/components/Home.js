import React from "react";
import Balance from "./Balance";
import Add from "./transaction/Add";
import AllTransactions from "./transaction/AllTransactions";

const Home = () => {
  return (
    <div>
      <Balance />
      <Add />
      <AllTransactions />
    </div>
  );
};

export default Home;
