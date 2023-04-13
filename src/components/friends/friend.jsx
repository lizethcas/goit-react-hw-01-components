import React from "react";
import "./friends.css";

const FriendList = ({ friends }) => {
  return (
    <>
      <section className="friends">
        <ul className="friend-list">
          {friends.map((friend) => (
            <li className="item" key={friend.id}>
              <span className={friend.isOnline.toString()}></span>
              <img
                className="avatar__friend"
                src={friend.avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{friend.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FriendList;
