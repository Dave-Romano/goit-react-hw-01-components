import styled from "styled-components";
export const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  text-align: center;
  .description {
    width: 430px;
    background-color: darkgray;
    border: 5px solid #3d3d3d;
    border-radius: 20px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    margin: 10px;
  }

  .avatar {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: 300px;
  }
  .name,
  .tag,
  .location {
    /* line-height: 50px; */
    text-transform: uppercase;
  }
  .name {
    color: black;
    font-size: 40px;
  }
  .tag {
    color: #747474;
    font-size: 20px;
  }
  .location {
    font-size: 25px;
    color: #343434;
  }

  .stats {
    font-size: 25px;
    margin-top: 15px;
    display: flex;
    width: 400px;
    justify-content: space-between;
  }
  .label {
    color: black;
    /* height: 20px; */
  }

  .quantity {
    color: #3d3d3d;
    font-size: 30px;
    height: 20px;
  }
`;
