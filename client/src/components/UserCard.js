import React from "react";

function UserCard({ user }) {
  const { avatar, bio, username } = user;
  return (
    <div className="user-card">
      <div className="upper-container">
        <div className="image-container">
          <img
            className="user-image"
            height="100px"
            width="100px"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>

      <div className="lower-container">
        <h3>{`Welcome back ${username}`}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default UserCard;
