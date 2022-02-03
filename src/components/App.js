import React from "react";

import Profile from "./profile/Profile";
import Statistic from "./statistic/Statistic";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import data from "data";

const App = () => {
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

export default App;
