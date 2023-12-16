import classes from "./Navigator.module.css";
import Dashboard from "./Dashboard";
import Headers from "../Layout/Headers";
import Room from "../Room/Room";

const Navigator = (props) => {
  return (
    <div className={classes.Navigator}>
      <Headers
        changePage={props.changePage}
        score={props.score}
        room={props.room}
        username={props.username}
      />
      {props.page!=="dashboard" ? (
        <Room
          roomPage={props.page}
          changePage={props.changePage}
          handleRoom={props.handleRoom}
          username={props.username}
        />
      ) : null}
      <Dashboard score={props.score} handleScore={props.handleScore} />
    </div>
  );
};

export default Navigator;
