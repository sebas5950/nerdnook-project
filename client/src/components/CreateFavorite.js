const CreateFavorite = ({postid, currentUser}) => {

    const handleFav = ()  => {
        const favPost = {
            post_id: postid,
            user_id: currentUser,
            like: true
        }
        const favoritePost = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(favPost)
        }
        fetch('/favorites', favoritePost)
        .then(console.log('this works now'))
    }

    return (
        <div>
           <button onClick={handleFav}>❤️</button>
        </div>
    )
}

export default CreateFavorite