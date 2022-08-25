import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";

const Posts = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  const updatePosts = (id) => {
    const deletedPosts = posts.filter((post) => post.id !== id);
    setPosts(deletedPosts);
  };

  function ChangeValue(value) {
    setSearchBar(value);
  }

  const filteredData = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchBar.toLowerCase());
  });

  return (
    <>
      <div className="posts-wrap">
        <SearchBar onChangeValue={ChangeValue} />
        <div className="create-post-wrapper">
          <h3>CreatePost</h3>
          {currentUser ? (
            <div className="route-create">
              <Link to="/createpost">
                <input placeholder="Create Post" />
              </Link>
            </div>
          ) : (
            <div className="route-create">
              <Link to="/signup">
                <input placeholder="Create Post" />
              </Link>{" "}
            </div>
          )}
        </div>

        {filteredData.map((post) => {
          return (
            <PostCard
              post={post}
              key={post.id}
              onUpdatePosts={updatePosts}
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </>
  );
};
export default Posts;
