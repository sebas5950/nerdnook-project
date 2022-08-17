import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "./Comments";
import PostComment from "./PostComment";

const PostCard = ({ post, onUpdatePosts, currentUser }) => {
  const { title, genre, image, review, comments, id } = post;

  const [newComments, setNewComment] = useState([]);

  function handleClick() {
    fetch(`/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    onUpdatePosts(id);
  }

  function updateComments(data) {
    console.log(data)
  }

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
      <Link to={`/posts/${id}/editpost`} state={post}>
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
      <PostComment
        postid={id}
        currentUser={currentUser}
        onUpdateComments={updateComments}
      />
    </div>
  );
};

export default PostCard;
