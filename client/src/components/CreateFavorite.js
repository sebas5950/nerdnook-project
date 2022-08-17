const CreateFavorite = ({postid, currentUser}) => {

    const handleFav = ()  => {
        const favPost = {
            post_id: postid,
            user_id: currentUser,
            like: true
        }
        console.log(favPost)
    }

    return (
        <div>
           <button onClick={handleFav}>❤️</button>
        </div>
    )
}

export default CreateFavorite