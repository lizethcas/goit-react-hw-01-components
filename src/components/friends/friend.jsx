import React from "react";
import styles from "./friends.module.css";
import PropTypes from "prop-types";
const FriendList = ({ friends }) => {
  return (
    <>
      <section className={styles.friends}>
        <ul>
          {friends.map((friend) => (
            <li className={styles.item} key={friend.id}>
              <span className={styles[friend.isOnline.toString()]}></span>
              <img
                className={styles.avatar__friend}
                src={friend.avatar}
                alt="User avatar"
                width="48"
              />
              <p className={styles.avatar__name}>{friend.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

FriendList.prototypes = {
  friends: PropTypes.object.isRequired,
};
export default FriendList;
