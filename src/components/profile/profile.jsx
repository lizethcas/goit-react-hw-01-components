import React from "react";
import styles from "./profile.module.css";
import PropTypes from "prop-types";

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
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.prototypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
export default Profile;
