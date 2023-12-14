import classes from "./Headers.module.css";
import Navbar from "./Navbar";

const Headers = (props) => {
  return (
    <div className={classes.header}>
      <h1>Geo-India</h1>
      <Navbar changePage={props.changePage} />
    </div>
  );
};

export default Headers;
