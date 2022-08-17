import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "./Comments";
import PostComment from "./PostComment";
import CreateFavorite from "./CreateFavorite";

const PostCard = ({ post, onUpdatePosts, currentUser }) => {
  const { title, genre, image, review, comments, id } = post;

  const [newComments, setNewComment] = useState(comments);

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
    setNewComment((comments) => [...comments, data]);
  }

  function updateDelete(id) {
    const filteredComments = newComments.filter((comment) => comment.id !== id);
    setNewComment(filteredComments);
  }

  return (
    <div>
      <CreateFavorite currentUser={currentUser} postid={id} />
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
      {newComments.map((comment) => {
        return (
          <Comments
            com={comment}
            key={comment.id}
            onUpdateDelete={updateDelete}
          />
        );
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
