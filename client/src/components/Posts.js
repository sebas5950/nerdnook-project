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

  function ChangeValue(value) {
    setSearchBar(value);
  }

  const filteredData = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchBar.toLowerCase());
  });

  return (
    <div>
      <SearchBar onChangeValue={ChangeValue} />
      <Link to="/createpost">
        <input placeholder="Create Post" />
      </Link>
      {filteredData.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Posts;
