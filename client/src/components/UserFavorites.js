import ReadMore from "./ReadMore";
import FavoriteIcon from '@mui/icons-material/Favorite';
const UserFavorites = ({ favorite, onUpdateFavorite }) => {
  const { id, favorited_posts } = favorite;

  const { title, image, review, genre } = favorited_posts;

  function handleDelete() {
    fetch(`/favorites/${id}`, {
      method: "DELETE",
    });
    onUpdateFavorite(id);
  }

  return (
    <>
      <div className="individual-cards">
        <div className="post-items">
          <img className="poster-image" alt="Poster" src={image} />
          <div className="post-right">
            <div className="post-top">
              <h1>{title}</h1>
              <button onClick={handleDelete} className="fav-button">
                {<FavoriteIcon fontSize="large" />}
              </button>
            </div>
            <h4>{genre}</h4>
            <ReadMore>{review}</ReadMore>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFavorites;
