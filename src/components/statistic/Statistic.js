import React from "react";
import PropTypes from "prop-types";
import StatisticItem from "./statisticItem/StatisticItem";
import { StatisticStyled } from "./StatisticStyled";

const Statistic = ({ dataStatistic, title }) => {
  return (
    <StatisticStyled>
      {title && <h2 className="title">{title}</h2>}
      <ul className="item-list">
        {dataStatistic.map((el) => {
          const { id, label, percentage } = el;
          return (
            <StatisticItem key={id} label={label} percentage={percentage} />
          );
        })}
      </ul>
    </StatisticStyled>
  );
};

Statistic.propTypes = {
  dataStatistic: PropTypes.array,
};
// Statistic.propTypes = {
//   dataStatistic: PropTypes.shape({
//     el: PropTypes.shape({
//       id: PropTypes.string,
//     }),
//   }),
// };

export default Statistic;
