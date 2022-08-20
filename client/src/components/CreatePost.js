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
        res.json().then((data) =>setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`)));
      }
    });
    console.log(errors);
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

export default CreatePost;
