import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Footer from "./components/Footer"

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => setCurrentUser(userData));
      } else {
        res.json().then((json) => console.log(json.errors));
      }
    });
  }, []);

  let userId = currentUser.id;

  const updateUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <>
      <Navigation currentUser={currentUser} updateUser={updateUser} />
      <Routes>
        {currentUser ? (
          <Route
            path="/user"
            element={<UserProfile updateUser={updateUser} />}
          />
        ) : (
          <></>
        )}

        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/createpost"
          element={<CreatePost currentUser={userId} />}
        />
        <Route
          path="/posts/:id/editpost"
          element={<EditPost currentUser={userId} />}
        />
        <Route path="/login" element={<Login updateUser={updateUser} />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts currentUser={userId} />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
      
    </>
  );
}

export default App;
