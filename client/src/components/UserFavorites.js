import ReadMore from "./ReadMore";

const UserFavorites = ({ favorite, onUpdateFavorite }) => {
    const { id, favorited_posts } = favorite

  const { title, image, review, genre } = favorited_posts

  function handleDelete() {
    fetch(`/favorites/${id}`, {
        method: "DELETE",
    })
    onUpdateFavorite(id)
  }

  return (
    <div>
        <button onClick={handleDelete}>Unfavorite</button>
      <h1>{title}</h1>
      
      <img className="poster-image" alt="Poster" src={image} />
      <h4>{genre}</h4>
      <ReadMore>
        {review}
      </ReadMore>
       

    </div>
  );
};

export default UserFavorites;
