import { useEffect, useState } from "react";
import UserFavorites from "./UserFavorites";
import UserCard from "./UserCard";

function UserProfile() {
  const [user, setUser] = useState([]);
  const [userFav, setUserFav] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const { favorites } = user;


  useEffect(() => {
    fetch("/userfavorites").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData);
          setLoading(false);
          setUserFav(userData.favorites);
        });
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  const updateFavorite = (id) => {
    const newFav = favorites.filter((fav) => fav.id !== id);
    setUserFav(newFav);
  };

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;
  return (
    <>
    <div className="App-user">
      <UserCard user={user} key={user.id}/>
    </div>
      
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
     
    </>
  );
}

export default UserProfile;
