import StreetView from "./Streetview";
import GuessPanel from "./GuessPanel";
import classes from "./Game.module.css";
const Game = () => {
  const apiKey = "";
  const position = { lat: 37.7749, lng: -122.4194 };

  const handleGuessSubmit = (userMarker) => {
    console.log(userMarker);
  };

  return (
    <div className={classes.game_body}>
      <StreetView apiKey={apiKey} position={position} />
      <div style={{ display: "flex", flexDirection: "column",width:"40%" }}>
        <GuessPanel
          apiKey={apiKey}
          initialPosition={position}
          onGuessSubmit={handleGuessSubmit}
        />
      </div>
    </div>
  );
};

export default Game;
