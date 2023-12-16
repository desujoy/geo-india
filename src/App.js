import React, { useState } from "react";
import "./App.css";
import Navigator from "./components/UI/Navigator";

function App() {
  const [navPage, setNavPage] = useState("dashboard");
  const [score, setScore] = useState(0);
  const [room, setRoom] = useState('None');

  const handleNavPage = (page) => {
    console.log(page);
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
      />
    </>
  );
}

export default App;
