import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ currentUser }) => {
  let navigate = useNavigate();

  let startFormData = {
    title: "",
    image: "",
    review: "",
    genre: "Anime",
    author_id: currentUser,
  };
  const [formData, setFormData] = useState(startFormData);
  const [errors, setErrors] = useState(null);
  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const postRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch("/posts", postRequest).then((res) => {
      if (res.ok) {
        navigate("/posts");
        setFormData(startFormData);
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

  return (
    <div className="create-box-wrapper">
      <div className="create-box">
        <form className="form-data-create" onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            onChange={handleChange}
            type={"text"}
            name="title"
            value={formData.title}
            placeholder="Title"
          />
          <label>Image</label>
          <input
            onChange={handleChange}
            type={"text"}
            name="image"
            value={formData.image}
            placeholder="Image URL"
          />
          <label>Genre</label>
          <select name="genre" value={formData.genre} onChange={handleChange}>
            <option>Anime</option>
            <option>Comic</option>
            <option>Manga</option>
            <option>Movie</option>
          </select>
          <label>Review</label>
          <div className="text-area">
            <textarea
              onChange={handleChange}
              type={"text"}
              name="review"
              value={formData.review}
              placeholder="Write Review"
            />
          </div>

          <button type="submit" value="Log in!" className="signup-button">
            Submit
          </button>
          {errors
            ? errors.map((e) => (
                <div className="login-errors">
                  <h4>{e[1]}</h4>
                </div>
              ))
            : null}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
