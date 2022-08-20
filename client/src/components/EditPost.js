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
    author_id: currentUser
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
    fetch(`/posts/${id}`, patchData)
    .then(res => {
      if(res.ok) {
        navigate("/posts");
      }
      else{
        res.json().then((data) =>setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`)));
      }
    })
    
  }

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="form-data">
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
        <label>Genre</label>
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
      {errors ? errors.map((e) => <div>{e}</div>) : null}
    </div>
  );
};

export default EditPost;
