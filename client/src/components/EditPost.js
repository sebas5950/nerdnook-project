import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const EditPost = ({ currentUser }) => {
  const location = useLocation();
  const post = location.state;
  const { title, image, review } = post;
  let startFormData = {
    title: title,
    image: image,
    review: review,
    genre: "Anime",
    author_id: currentUser,
  };
  const [formData, setFormData] = useState(startFormData);
  const [errors, setErrors] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const patchData = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch(`/posts/${id}`, patchData).then((res) => {
      if (res.ok) {
        navigate("/posts");
      } else {
        res.json().then((data) => setErrors(Object.entries(data.errors)));
      }
    });
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
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
            <option className="option-dropdown">Anime</option>
            <option className="option-dropdown">Comic</option>
            <option className="option-dropdown">Manga</option>
            <option className="option-dropdown">Movie</option>
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

export default EditPost;
