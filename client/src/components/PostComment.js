import { useState } from "react";

const PostComment = ({ postid, currentUser, onUpdateComments }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalForm = {
        comment: comment,
        user_id: currentUser,
        post_id: postid
    }
    let postComment = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(finalForm)
    }
    fetch("/comments", postComment)
    
    .then(res => res.json())
    .then(data => onUpdateComments(data))
  };
 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <input type={"submit"} value="Comment" />
      </form>
    </div>
  );
};
export default PostComment;
