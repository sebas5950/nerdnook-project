import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"

function Login({ updateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const { username, password } = formData;

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    // Logs in user
    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          navigate(`/user`);
        });
      } else {
        res.json().then((json) => setErrors(json.error));
      }
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="container" id="container">
        <div className="overlay-container">
            <div class="overlay-panel overlay-right">
              <h1>Welcome to NerdNook</h1>
              <p>
                Please sign in with the form to the right!
              </p>
                <img
            src={Logo}
            alt="logo"
          />
            </div>
         
        </div>
        <div className="login-box login-container">
          <form className="form-data" onSubmit={onSubmit}>
            <h1>Login</h1>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder='Username'
            />
            <label>Password</label>
            <input
              type="password"
              placeholder='Password'
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button type="submit" value="Log in!" className="log">
              Log In!
            </button>
          </form>
          <div className="login-errors">
            {errors ? <h4>{errors}</h4> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
