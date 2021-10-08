import styled from "styled-components";
export const FriendListStyled = styled.ul`
  /* background-color: wheat; */
  display: flex;
  margin-top: 50px;
  justify-content: center;

  .img {
    size: 10px;
  }

  .item {
    text-align: center;
    border: 2px solid #3d3d3d;
    border-radius: 10px;
  }

  .online {
    background-color: silver;
  }

  .offline {
    filter: grayscale(100%);
    background-color: #979797;
  }

  .item:not(:last-child) {
    margin-right: 20px;
  }
  .name {
    text-transform: uppercase;
    font-size: 40px;
  }
`;
