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
    <div>
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
