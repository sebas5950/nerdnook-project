import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/Nerdnook.png";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    bio: "",
    avatar: "",
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const { username, password, bio, avatar } = formData;

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
      bio,
      avatar,
    };

    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          navigate(`/login`);
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
    <div  className="container" id="container">

    
    <div className="overlay-container">
            <div class="overlay-panel overlay-right">
              <h1>Welcome to NerdNook</h1>
              <p>
                Please sign in with the form to the right!
              </p>
                <img
            src={Icon}
            alt="logo"
          />
            </div>
         
        </div>
      <div className="login-box">
        <form className="form-data" onSubmit={onSubmit}>
        <Avatar />
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="username"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="secret"
          />
          <label>Bio</label>
          <input
            type="test"
            placeholder="optional"
            name="bio"
            value={bio}
            onChange={handleChange}
          />
          <label>Avatar</label>
          <input
            type="text"
            name="avatar"
            value={avatar}
            onChange={handleChange}
            placeholder="optional"
          />

          <button  type="submit" value="Log in!" className="signup-button">
            Sign Up!
          </button>
          {errors
            ? errors.map((error) => (
              <div key={error.id} className="login-errors">
                <h4>
                  {" "}
                  {error[1]}{" "}
                </h4>
              </div>  
              ))
            : null}
        </form>        
      </div>
      </div>
    </>
  );
}

export default SignUp;
