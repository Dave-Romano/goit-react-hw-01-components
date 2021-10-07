import styled from "styled-components";
export const StatisticItemStyled = styled.li`
  background-color: silver;
  padding: 0px 20px;
  border: 2px solid #3d3d3d;
  border-radius: 5px;
  font-size: 20px;

  &:not(:last-child) {
    margin-right: 10px;
  }
  .label {
    margin-right: 6px;
  }
  .percentage {
    font-size: 30px;
  }
`;
