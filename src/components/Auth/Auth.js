import classes from "./Auth.module.css";
import Login from "./Login";
import Register from "./Register";

const Auth = (props) => {
  return <div className={classes.auth}>{props.authPage === "register" ? <Register /> : <Login />}</div>;
};

export default Auth;
