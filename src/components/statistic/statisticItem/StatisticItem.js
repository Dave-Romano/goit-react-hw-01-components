import React from "react";
import PropTypes from "prop-types";
import { StatisticItemStyled } from "./StatisticItemStyled";

const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticItemStyled>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatisticItemStyled>
  );
};

StatisticItem.propTypes = {
  lablel: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticItem;
