import { useEffect, useState } from "react";
import UserFavorites from "./UserFavorites";

function UserProfile() {
  const [user, setUser] = useState([]);
  const [userFav, setUserFav] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const {avatar, bio, username} =user
  const { favorites } = user;

  console.log(userFav);

  useEffect(() => {
    fetch("/userfavorites").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData);
          setLoading(false);
          setUserFav(userData.favorites)
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  const updateFavorite = (id) => {
    const newFav = favorites.filter((fav) => fav.id !== id);
    setUserFav(newFav)
  };

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;
  return (
    <div>
     
      <h1>{`Welcome back ${username}`}</h1>
      <img src={avatar} alt="avatar" />
      <p>{bio}</p>
      {userFav.map((fav) => {
        return (
           <div className="post-card">
            <UserFavorites
            favorite={fav}
            key={fav.id}
            onUpdateFavorite={updateFavorite}
          />
           </div>
          
        );
      })}
    </div>
  );
}

export default UserProfile;
