import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
function UserCard({ user }) {
  const { avatar, bio, username } = user;
  return (
    <div className="user-card">
        <div className="image-container">
          <img
            className="user-image"
            height="100px"
            width="100px"
            src={avatar}
            alt="avatar"
          />
        </div>
      <div className="right-user">
        <div className="username-gear">
           <h3>{`Welcome back ${username}`}</h3>
        <button>{<SettingsIcon />}</button>
        </div>
        <p className="para">{bio}</p>
      </div>
    </div>
  );
}

export default UserCard;
