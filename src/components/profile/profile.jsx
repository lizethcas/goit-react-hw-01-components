import React from "react";
import "./profile.css";

const Profile = ({
  username,
  tag,
  avatar,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img className="avatar" src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
