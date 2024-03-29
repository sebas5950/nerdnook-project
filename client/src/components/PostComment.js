import { useState } from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
const PostComment = ({ postid, currentUser, onUpdateComments }) => {
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalForm = {
      comment: comment,
      user_id: currentUser,
      post_id: postid,
    };
    let postComment = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalForm),
    };
    fetch("/comments", postComment).then((res) => {
      if (res.ok) {
        res.json().then((data) => onUpdateComments(data));
        setComment("");
      } else {
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
    e.target.reset()
  };

  return (
    <>
      <div className="comment-input-wrapper">
        <form onSubmit={handleSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Write a Comment..."
            onChange={(e) => setComment(e.target.value)}
          />
          
          <button type={"submit"} value="Comment" className="comment-button">
            {<ChatBubbleOutlineIcon fontSize="small" />}
          </button>
        </form>
        {errors ? errors.map((e) => <div>{e}</div>) : null}
      </div>
    </>
  );
};
export default PostComment;
