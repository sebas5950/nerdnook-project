import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "./Comments";
import PostComment from "./PostComment";
import CreateFavorite from "./CreateFavorite";
import ReadMore from "./ReadMore";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

const PostCard = ({ post, onUpdatePosts, currentUser }) => {
  const { title, genre, image, review, comments, id, author_id } = post;

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
    <div className="individual-cards" >
      <div className="post-items">
        <img
          src={image}
          placeholder="Poster"
          className="poster-image"
          
          alt="Poster"
        />
        <div className="post-right">
          <div className="post-top">
            <h1 className="card-title">{title}</h1>
            <div className="post-buttons">
              <CreateFavorite currentUser={currentUser} postid={id} />
              {currentUser === author_id ? (
                <button onClick={handleClick} className="delete-button">
                  {<DeleteForeverIcon fontSize="large" />}
                </button>
              ) : (
                <></>
              )}
              <Link to={`/posts/${id}/editpost`} state={post}>
                {currentUser === author_id ? (
                  <button className="delete-button">
                    {<EditIcon fontSize="large" />}
                  </button>
                ) : (
                  <></>
                )}
              </Link>
            </div>
          </div>
          <div className="post-text">
            <h3>{genre}</h3>
            <ReadMore>{review}</ReadMore>
          </div>
        </div>
      </div>

      <div className="comment-section">
        <div className="comment-area">
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
        </div>
        <PostComment
          postid={id}
          currentUser={currentUser}
          onUpdateComments={updateComments}
        />
      </div>
    </div>
  );
};

export default PostCard;
