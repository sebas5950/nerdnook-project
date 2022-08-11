import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={onSubmit}>
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
          placeholder='secret'
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

        <input type="submit" value="Sign up!" />
      </form>
      {errors
        ? errors.map((error) => (
            <div key={error.id}>
              {" "}
              {error[0]} {error[1]}{" "}
            </div>
          ))
        : null}
    </>
  );
}

export default SignUp;
