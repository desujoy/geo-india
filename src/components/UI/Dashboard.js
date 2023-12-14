import Game from "../Game/Game";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <Game />
    </div>
  );
};

export default Dashboard;
