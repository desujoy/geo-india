import Game from "../Game/Game";
import classes from "./Dashboard.module.css";

const Dashboard = (props) => {
  return (
    <div className={classes.dashboard}>
      <Game
        score={props.score}
        username={props.username}
        room={props.room}
        handleScore={props.handleScore}
        isStreetView={props.isStreetView}
      />
    </div>
  );
};

export default Dashboard;
