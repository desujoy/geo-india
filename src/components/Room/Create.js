import classes from "./Create.module.css";
import { useState } from "react";

const CreateRoom = () => {
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
    console.log(roomName, roomPassword);
  }

  return (
    <div className={classes.room}>
      <h1>Create Room</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="room-name">Room Name</label>
        <input type="text" name="room-name" id="room-name" />
        <label htmlFor="room-password">Room Password</label>
        <input type="password" name="room-password" id="room-password" />
      { error && <p className={classes.error}>{error}</p> }
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateRoom;
