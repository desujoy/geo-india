import Game from "../Game/Game";
import classes from "./Dashboard.module.css";

const Dashboard = (props) => {
  return (
    <div className={classes.dashboard}>
      <Game score={props.score} handleScore={props.handleScore}/>
    </div>
  );
};

export default Dashboard;
