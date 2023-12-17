import express from "express";
import { connectDB, db, coordsModel, roomsModel } from "./config.js";

const app = express();
const PORT = 5000;
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/coords", async (req, res) => {
  const coords = await coordsModel.find({});
  console.log(coords);
  const coordsArray = [];
  for (let i = 0; i < coords.length; i++) {
    console.log(coords[i].long);
    coordsArray.push({
        lat: coords[i].lat,
        lng: coords[i].long,
    });
  }
  console.log(coordsArray);
  res.send(coordsArray);
});

app.get("/api/rooms", async (req, res) => {
  const rooms = await db.getCollection("rooms").find({});
  const roomsArray = [];
  rooms.forEach((doc) => {
    roomsArray.push(doc.data());
  });
  res.json(roomsArray);
});

app.post("/api/rooms", async (req, res) => {
  const rooms = await db.getCollection("rooms").find({});
  const roomName = req.body.roomName;
  const roomPassword = req.body.roomPassword;
  const user = req.body.user;
  if (roomName.trim() === "" || roomPassword.trim() === "") {
    res.status(400).json({ error: "Please fill in all the fields" });
    return;
  }
  rooms.forEach((doc) => {
    if (doc.data().name === roomName) {
      res.status(400).json({ error: "Room already exists" });
      return;
    }
  });
  const docRef = await db.getCollection("rooms").add({
    name: roomName,
    password: roomPassword,
    users: [user],
  });
  res.json({ id: docRef.id });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
