import React from "react";
import PropTypes from "prop-types";
import { ProfileStyled } from "./ProfileStyled";

const Profile = ({ dataUser }) => {
  const { avatar, name, tag, location, stats } = dataUser;
  const { followers, views, likes } = stats;
  return (
    <ProfileStyled>
      <div className="description">
        <img src={avatar} alt="User Avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@ {tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">{Object.keys(stats)[0]} </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">{Object.keys(stats)[1]} </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">{Object.keys(stats)[2]} </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </ProfileStyled>
  );
};

Profile.propTypes = {
  dataUser: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default Profile;
