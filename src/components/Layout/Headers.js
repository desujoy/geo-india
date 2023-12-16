import classes from "./Headers.module.css";
import Navbar from "./Navbar";
import Scoreboard from "./Scoreboard";

const Headers = (props) => {
  return (
    <div className={classes.header}>
      <h1>Geo-India</h1>
      <Scoreboard score={props.score} room={props.room} username={props.username}/>
      <Navbar changePage={props.changePage} room={props.room}/>
    </div>
  );
};

export default Headers;
