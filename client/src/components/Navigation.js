// import { useState } from "react";
import { Link } from "react-router-dom";

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
        <img src="https://cdn.discordapp.com/attachments/975808758880018463/1011674130824822815/Group_1.png" alt="LOGO"/>
      </div>
      {currentUser ? (
        <div className="header-middle">
          <Link to="/home">home</Link>
          <Link to="/posts">Posts</Link>
          <Link to={`/user`}>Account</Link>
          <Link onClick={handleLogOut} to="/">
            Log Out
          </Link>
        </div>
      ) : (
        <div className="header-middle">
          <Link to="/home">home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default Navigation;
