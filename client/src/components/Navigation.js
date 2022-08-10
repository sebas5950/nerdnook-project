import { useState } from "react";
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
    <nav>
      {currentUser ? (
        <div>
          <Link to="/home">home</Link>
          <Link to={`/users/${currentUser.id}`}>Account</Link>
          <Link onClick={handleLogOut} to={"/"}>
            Log Out
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/home">home</Link>
          <Link to="/">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
