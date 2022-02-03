import React from "react";
import PropTypes from "prop-types";
import { FriendListStyled } from "./FriendListStyled";

const FriendList = ({ dataFriends }) => {
  return (
    <>
      <FriendListStyled>
        {dataFriends.map((friend) => {
          const { id, isOnline, name, avatar } = friend;
          return (
            <li className={`item ${isOnline ? "online" : "offline"}`} key={id}>
              <span className="status">{isOnline ? "online" : "offline"}</span>
              <img src={avatar} alt={name} width="110" className="img" />
              <p className="name">{name}</p>
            </li>
          );
        })}
      </FriendListStyled>
    </>
  );
};

FriendList.propTypes = {
  dataFriends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
