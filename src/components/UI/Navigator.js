import React, { useState } from "react";
import classes from "./Navigator.module.css";
import Dashboard from "./Dashboard";
import Headers from "../Layout/Headers";
import Room from "../Room/Room";

const Navigator = (props) => {
  const [isStreetView, setIsStreetView] = useState(true);

  const changeGameMode = () => {
    setIsStreetView((prev) => !prev);
  };

  return (
    <div className={classes.Navigator}>
      <Headers
        changePage={props.changePage}
        score={props.score}
        room={props.room}
        username={props.username}
        changeGameMode={changeGameMode}
      />
      {props.page !== "dashboard" ? (
        <Room
          roomPage={props.page}
          changePage={props.changePage}
          handleRoom={props.handleRoom}
          username={props.username}
          room={props.room}
        />
      ) : null}
      <Dashboard
        score={props.score}
        username={props.username}
        room={props.room}
        handleScore={props.handleScore}
        isStreetView={isStreetView}
      />
    </div>
  );
};

export default Navigator;
