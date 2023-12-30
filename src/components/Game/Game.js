import { useEffect, useState } from "react";
import StreetView from "./Streetview";
import GuessPanel from "./GuessPanel";
import classes from "./Game.module.css";
import axios from "axios";
import { db } from "../../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import QPanel from "./QPanel";
import { maplist, guesslist } from "./lists";

const updateScore = async (room, username, score) => {
  const roomRef = doc(db, "rooms", room);
  const docSnap = await getDoc(roomRef);
  const users = docSnap.data().users;
  if (!users) {
    return;
  }
  const userIndex = users.findIndex((user) => user.username === username);
  users[userIndex].score = score;
  await updateDoc(roomRef, {
    users: users,
  });
};

const Game = (props) => {
  const apiKey = "AIzaSyApJA7fCKsudyOB8KTnXQciCKKC0lfgy0Y";
  const [position, setPosition] = useState({ lat: 37.7749, lng: -122.4194 });
  const [map, setMap] = useState("andhra17.gif");

  useEffect(() => {
    axios
      .get(
        "https://geo-india-b4df4-default-rtdb.asia-southeast1.firebasedatabase.app/coords.json"
      )
      .then((response) => {
        const coords = response.data["-NlnTkcCgwJRFNCM2rLk"];
        const randomIndex = Math.floor(Math.random() * coords.length);
        setPosition(coords[randomIndex]);
      });
    updateScore(props.room, props.username, props.score);
    setMap(maplist[Math.floor(Math.random() * maplist.length)]);
  }, [props.score, props.room, props.username]);

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km

    return d;
  };

  const handleGuessSubmit = (userMarker) => {
    const distance = getDistance(
      userMarker.lat,
      userMarker.lng,
      position.lat,
      position.lng
    );
    if (distance < 1) {
      props.handleScore(5000);
    } else if (distance < 5) {
      props.handleScore(4000);
    } else if (distance < 10) {
      props.handleScore(2000);
    } else if (distance < 50) {
      props.handleScore(1000);
    } else {
      props.handleScore(0);
    }
  };

  return (
    <div className={classes.game_body}>
      {props.isStreetView && <StreetView apiKey={apiKey} position={position} />}
      {!props.isStreetView && <QPanel map={map} />}
      <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
        <GuessPanel
          isStreetView={props.isStreetView}
          apiKey={apiKey}
          initialPosition={{ lat: 23.345386, lng: 80.426676 }}
          onGuessSubmit={handleGuessSubmit}
          guesslist={guesslist}
          map={map}
          handleScore={props.handleScore}
        />
      </div>
    </div>
  );
};

export default Game;
