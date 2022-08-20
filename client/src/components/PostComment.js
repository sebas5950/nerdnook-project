import { useState } from "react";

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
    fetch("/comments", postComment)
    
      .then((res) => {
        if(res.ok){
          res.json() 
      .then((data) => onUpdateComments(data));
    setComment("");
        }
        else {
          res.json().then((data) =>setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`)));
        }
        })
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
      {errors ? errors.map((e) => <div>{e}</div>) : null}
    </div>
  );
};
export default PostComment;
