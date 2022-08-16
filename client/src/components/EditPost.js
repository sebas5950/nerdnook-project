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
    author_id: currentUser.id,
  };
  const [formData, setFormData] = useState(startFormData);
  const { id } = useParams();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const patchData = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    fetch(`/posts/${id}`, patchData);
    navigate("/posts");
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <form className="form-data" onSubmit={handleSubmit}>
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
        <select name="genre" value={formData.genre} onChange={handleChange}>
          <option>Anime</option>
          <option>Comic</option>
          <option>Manga</option>
          <option>Movie</option>
        </select>
        <label>Review</label>
        <textarea
          onChange={handleChange}
          type={"text"}
          name="review"
          value={formData.review}
          placeholder="Write Review"
        />
        <input type={"submit"} value="submit" />
      </form>
    </div>
  );
};

export default EditPost;
