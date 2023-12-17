import classes from "./Create.module.css";
import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, getDoc, doc } from "firebase/firestore";

const CreateRoom = (props) => {
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
    // try {
    //   const doc = await addDoc(collection(db, "rooms"), {
    //     name: roomName,
    //     password: roomPassword,
    //     users: [{username: props.username, score: 0}]
    //   });
    //   console.log("Document written with ID: ", doc.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    props.handleRoom(roomName);
    props.changePage("dashboard");
    console.log(roomName, roomPassword);
  };

  return (
    <div className={classes.room}>
      <h1>Create Room</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="room-name">Room Name</label>
        <input type="text" name="room-name" id="room-name" />
        <label htmlFor="room-password">Room Password</label>
        <input type="password" name="room-password" id="room-password" />
        {error && <p className={classes.error}>{error}</p>}
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateRoom;
