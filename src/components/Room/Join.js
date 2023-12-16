import classes from "./Create.module.css";
import { useState } from "react";

const JoinRoom = (props) => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const roomName = e.target["room-name"].value;
    const roomPassword = e.target["room-password"].value;
    if (roomName.trim() === "" || roomPassword.trim() === "") {
      setError("Please fill in all the fields");
      return;
    }
    setError(null);
    if (roomName==="Sujoy" && roomPassword==="1234") {
      props.handleRoom("Sujoy");
      props.changePage("dashboard"); 
    } else {
      setError("Invalid room name or password");
      return;
    }
    console.log(roomName, roomPassword);
  }

  return (
    <div className={classes.room}>
      <h1>Join Room</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="room-name">Room Name</label>
        <input type="text" name="room-name" id="room-name" />
        <label htmlFor="room-password">Room Password</label>
        <input type="password" name="room-password" id="room-password" />
      { error && <p className={classes.error}>{error}</p> }
        <button>Join</button>
      </form>
    </div>
  );
};

export default JoinRoom;
