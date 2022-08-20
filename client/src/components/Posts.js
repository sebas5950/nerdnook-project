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
console.log(posts)
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
    <div>
      <SearchBar onChangeValue={ChangeValue} />
      <div>
        <h3>Create Post:</h3>
        {currentUser ? <Link to="/createpost">
          <input placeholder="Create Post" />
        </Link> : <Link to="/">
          <input placeholder="Create Post" />
        </Link> }
      </div>
      <div className="post-card">
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
    </div>
  );
};
export default Posts;
