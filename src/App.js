import React, { useEffect, useState } from "react";
import "./App.css";
import Navigator from "./components/UI/Navigator";
import { generateUsername } from "unique-username-generator";

function App() {
  const [navPage, setNavPage] = useState("dashboard");
  const [score, setScore] = useState(0);
  const [room, setRoom] = useState('None');
  const [username,setUsername] = useState(''); 

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
      return;
    }
    const username = generateUsername("-");
    localStorage.setItem("username", username);
    setUsername(username);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("room")) {
      setRoom(localStorage.getItem("room"));
      return;
    }
    setRoom('None');
  }, []);

  const handleNavPage = (page) => {
    setNavPage(page);
  };

  const handleScore = (newScore) => {
    setScore((prevScore) => {
      return prevScore + newScore;
    });
  };

  const handleRoom = (newRoom) => {
    setRoom(newRoom);
  }

  return (
    <>
      <Navigator
        page={navPage}
        changePage={handleNavPage}
        score={score}
        handleScore={handleScore}
        room={room}
        handleRoom={handleRoom}
        username={username}
      />
    </>
  );
}

export default App;
