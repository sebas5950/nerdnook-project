const Comments = ({ com, onUpdateDelete, currentUser }) => {
  const { comment, id, user_id, commentor } = com;

  const handleDelete = () => {
    const deleteComment = {
      method: "DELETE",
    };
    fetch(`/comments/${id}`, deleteComment).then((res) => {
      if (res.ok) {
        onUpdateDelete(id);
      } else {
        res
          .json()
          .then((data) =>
            alert(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  };


  return (
    <div className="comment-section">
      <p>
        {commentor}
      </p>
      <p>{comment}</p>
      {user_id === currentUser ?<button onClick={handleDelete}>❌</button> : <></>}
    </div>
  );
};

export default Comments;
