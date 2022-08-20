import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "./Comments";
import PostComment from "./PostComment";
import CreateFavorite from "./CreateFavorite";
import ReadMore from "./ReadMore";

const PostCard = ({ post, onUpdatePosts, currentUser }) => {
  const { title, genre, image, review, comments, id, author_id } = post;

  const [newComments, setNewComment] = useState(comments);
  const [commentToggle, setCommentToggle] = useState(false)

  function handleToggle(){
    setCommentToggle(!commentToggle)
  }
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
      {currentUser === author_id ? <button onClick={handleClick}>Delete</button> : <></>}
      <Link to={`/posts/${id}/editpost`} state={post}>
      {currentUser === author_id ?  <button>Edit</button>: <></>}
      </Link>
      <h1 className="card-title">{title}</h1>
      <img
        src={image}
        placeholder="Poster"
        className="poster-image"
        alt="Poster"
      />
      <h3>{genre}</h3>
      <ReadMore>
        {review}
      </ReadMore>
      

      {newComments.map((comment) => {
        return (
          <Comments
            com={comment}
            key={comment.id}
            currentUser={currentUser}
            onUpdateDelete={updateDelete}
          />
        );
      })}
      {commentToggle ? <></> :<button onClick={handleToggle}>Comment</button>}
      {commentToggle ? <PostComment
        postid={id}
        currentUser={currentUser}
        onUpdateComments={updateComments}
      /> : <></>}
      
    </div>

  );
};

export default PostCard;
