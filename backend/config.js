import mongoose from "mongoose";

const uri =
  "mongodb+srv://cyberphiles:SpaceHacker99@geoindia.lfocfrb.mongodb.net/GeoIndia?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log("MongoDB connection FAIL");
    process.exit(1);
  }
};

const coordsSchema = mongoose.Schema({
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
});
const coordsModel = mongoose.model("coords", coordsSchema);

const roomsSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  users: [{ username: String, score: Number }],
});
const roomsModel = mongoose.model("rooms", roomsSchema);

const db = {
  coords: coordsModel,
  rooms: roomsModel,
};

export { connectDB, db, coordsModel, roomsModel };
