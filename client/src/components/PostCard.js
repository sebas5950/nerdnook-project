import Comments from './Comments'

const PostCard = ({post, onUpdatePosts}) => {

    const {title, genre, image, review, comments, id} = post
    
   function handleClick() {
    fetch(`/posts/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    onUpdatePosts(id)
   }

    return(
        <div>
            <button onClick={handleClick}>Delete</button>
            <button>Edit</button>
            <h1>{title}</h1>
            <img src={image} placeholder='Poster' className="poster-image" alt='Poster'/>
            <h3>{genre}</h3>
            <p>{review}</p>
            {comments.map(comment => {
                return <Comments com={comment} key={comment.id}/>
            })}
        </div>
    )
}

export default PostCard