const Comments = ({ com }) => {
    const {comment, id, user_id } = com

    const handleDelete = (e) => {
        console.log(user_id)
    }
 
    return( 
        <div className="comment-section">
            <p>
            {comment}
            </p>
            <button onClick={handleDelete}>❌</button>
        </div>
    )
}

export default Comments