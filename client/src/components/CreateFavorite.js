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
        .then(res => {
            if(res.ok){
                console.log("it works")
            }
            else{
                res.json().then((data) => alert(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`)));
            }
        })
    }

    return (
        <div>
          {currentUser ? <button onClick={handleFav}>❤️</button> : <></>}
        </div>
    )
}

export default CreateFavorite