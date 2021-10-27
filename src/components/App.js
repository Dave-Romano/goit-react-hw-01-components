import React from "react";

import Profile from "./Profile/Profile";
import Statistic from "./Statistic/Statistic";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
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
