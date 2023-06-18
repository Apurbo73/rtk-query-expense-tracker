import React from "react";
import Balance from "./Balance";
import Add from "./transaction/Add";
import AllTransactions from "./transaction/AllTransactions";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Balance />
      <Add />
      <AllTransactions />
      <Footer />
    </div>
  );
};

export default Home;
