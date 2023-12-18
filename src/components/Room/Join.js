import classes from "./Create.module.css";
import { useState } from "react";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const JoinRoom = (props) => {
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomName = e.target["room-name"].value;
    const roomPassword = e.target["room-password"].value;
    if (roomName.trim() === "" || roomPassword.trim() === "") {
      setError("Please fill in all the fields");
      return;
    }
    setError(null);
    const roomRef = doc(db, "rooms", roomName);
    const docSnap = await getDoc(roomRef);
    if (!docSnap.exists()) {
      setError("Room does not exist");
      return;
    }
    if (docSnap.data().password === roomPassword) {
      if (docSnap.data().users.length >= 10) {
        setError("Room is full");
        return;
      }
      const users = docSnap.data().users;
      if (users.find((user) => user.username !== props.username)) {
        users.push({ username: props.username, score: 0 });
        await updateDoc(roomRef, {
          users: users,
        });
      }
      localStorage.setItem("room", roomName);
      props.handleRoom(roomName);
      props.changePage("dashboard");
    } else {
      setError("Invalid room name or password");
      return;
    }
  };

  return (
    <div className={classes.room}>
      <h1>Join Room</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="room-name">Room Name</label>
        <input type="text" name="room-name" id="room-name" />
        <label htmlFor="room-password">Room Password</label>
        <input type="password" name="room-password" id="room-password" />
        {error && <p className={classes.error}>{error}</p>}
        <button>Join</button>
      </form>
    </div>
  );
};

export default JoinRoom;
