import classes from "./Room.module.css";
import CreateRoom from "./Create";
import JoinRoom from "./Join";

const Room = (props) => {
  return (
    <div className={classes.room_card}>
      {props.roomPage === "create" && (
        <CreateRoom handleRoom={props.handleRoom} />
      )}
      {props.roomPage === "join" && <JoinRoom handleRoom={props.handleRoom} />}
      <button
        className={classes["back-button"]}
        onClick={() => props.changePage("dashboard")}
      >
        X
      </button>
    </div>
  );
};

export default Room;
