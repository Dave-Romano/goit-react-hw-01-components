// slr
// imr
import React from "react";
// import PropTypes from "prop-types";

import Profile from "./profile/Profile";
import Statistic from "./statistic/Statistic";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import data from "data";

const app = () => {
  return (
    <>
      <Profile dataUser={data.user} />
      <Statistic dataStatistic={data.statisticalData} title="Upload stats" />
      <Statistic dataStatistic={data.statisticalData} />
      <FriendList dataFriends={data.friends} />
      <TransactionHistory dataTransactions={data.transactions} />
    </>
  );
};

export default app;
