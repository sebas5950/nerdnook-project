import Avatar from '@mui/material/Avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Comments = ({ com, onUpdateDelete, currentUser }) => {
  const { comment, id, user_id, commentor, avatar } = com;
  console.log(com);
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
    <>
      <div className="main-comments">
        <Avatar src={avatar} />
        <div className="comment-button-wrapper">
          <h4>{commentor}</h4>
          <div className="comments-plus">
            <p>{comment}</p>
            {user_id === currentUser ? (
              <button onClick={handleDelete} className="comment-delete">
                {<DeleteForeverIcon fontSize="small" />}
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;

