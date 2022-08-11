
const PostCard = ({post}) => {

    const {title, genre, image, review, comments} = post
    let comment = comments.map((comment) => {
        return <p key={comment.id}>{comment.comment}</p>
    })
    console.log(comment)
    return(
        <div>
            <h1>{title}</h1>
            <img src={image} placeholder='Poster' className="poster-image"/>
            <h3>{genre}</h3>
            <p>{review}</p>
            {comment}
        </div>
    )
}

export default PostCard