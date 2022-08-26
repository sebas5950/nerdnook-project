// import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"
import HomeIcon from '@mui/icons-material/Home';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from '@mui/material/Avatar';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Navigation({ currentUser, updateUser }) {
  const handleLogOut = () => {
    // DELETE `/logout`
    fetch("/logout", {
      method: "DELETE",
    });
    updateUser(false);
  };

  return (
    <div className="header">
      <div className="header-first">
        <img
          src={Logo}
          alt="LOGO"
        />
      </div>
      {currentUser ? (
        <div className="header-middle">
          <Link to="/">
            {
              <div className="header-option">
                <HomeIcon fontSize="large" />
              </div>
            }
          </Link>{" "}
          <Link to="/posts">
            {
              <div className="header-option">
                <SubscriptionsIcon fontSize="large" />
              </div>
            }
          </Link>
          <Link to={`/user`}>
            {
              <div className="header-option">
                <SupervisedUserCircleIcon fontSize="large" />
              </div>
            }
          </Link>
          <Link onClick={handleLogOut} to="/">
            {
              <div className="header-option">
                <ExitToAppIcon fontSize="large" />
              </div>
            }
          </Link>
        </div>
      ) : (
        <div className="header-middle">
          <Link to="/">
            <div className="header-option">
              <HomeIcon fontSize="large" />
            </div>
          </Link>
          <Link to="/posts">
            <div className="header-option">
              <SubscriptionsIcon fontSize="large" />
            </div>
          </Link>

          <Link to="/signup">
            {
              <div className="header-option">
                {<AddBoxIcon fontSize="large" />}
              </div>
            }
          </Link>
        </div>
      )}

      <div className="header-last">
        <div className="header-info">
          <Avatar src={currentUser.avatar} />
          {currentUser ? (
            <h4>{currentUser.username}</h4>
          ) : (
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h4>Sign In</h4>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
