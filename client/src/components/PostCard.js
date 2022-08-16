import { Link } from "react-router-dom";
import Comments from "./Comments";
import EditPost from "./EditPost";

const PostCard = ({ post, onUpdatePosts }) => {
  const { title, genre, image, review, comments, id } = post;

  function handleClick() {
    fetch(`/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    onUpdatePosts(id);
  }

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
      <Link to={`/posts/${id}/editpost`} state={post} >
        <button>edit</button>
      </Link>
      <h1 className="card-title">{title}</h1>
      <img
        src={image}
        placeholder="Poster"
        className="poster-image"
        alt="Poster"
      />
      <h3>{genre}</h3>
      <p>{review}</p>
      {comments.map((comment) => {
        return <Comments com={comment} key={comment.id} />;
      })}
    </div>
  );
};

export default PostCard;
