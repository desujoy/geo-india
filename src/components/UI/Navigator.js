import classes from "./Navigator.module.css";
import Auth from "../Auth/Auth";
import Dashboard from "./Dashboard";
import Headers from "../Layout/Headers";

const Navigator = (props) => {
  return (
    <div className={classes.Navigator}>
      <Headers changePage={props.changePage} />
      {props.page === "register" || props.page === "login" ? (
        <Auth authPage={props.page} />
      ) : null}
      {props.page === "dashboard" ? <Dashboard /> : null}
    </div>
  );
};

export default Navigator;
