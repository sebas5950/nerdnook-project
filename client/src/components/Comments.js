const Comments = ({ com, onUpdateDelete }) => {
  const { comment, id, user_id } = com;

  const handleDelete = (e) => {
    const deleteComment = {
      method: "DELETE",
    };
    fetch(`/comments/${id}`, deleteComment);

    onUpdateDelete(id);
  };

  return (
    <div className="comment-section">
      <p>
        {user_id}
        {comment}
      </p>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default Comments;
