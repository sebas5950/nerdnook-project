import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation'
import UserProfile from "./components/UserProfile";
import Login from './components/Login'
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  
  const [currentUser, setCurrentUser] = useState(false)

  const updateUser = (user) => {
    setCurrentUser(user)
  } 

  console.log(currentUser)
  return (
    <div className="App">
      <Navigation currentUser={currentUser} updateUser={updateUser}/>
      <Routes>
        {currentUser ? <Route path="/users/:id" element={<UserProfile updateUser={updateUser}/>} /> : null }
        <Route path="/" element={<SignUp updateUser={updateUser}/>} />
        <Route path="/login" element={<Login updateUser={updateUser} />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
  </div>
  );
}

export default App;
