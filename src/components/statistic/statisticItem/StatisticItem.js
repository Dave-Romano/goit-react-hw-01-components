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
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
