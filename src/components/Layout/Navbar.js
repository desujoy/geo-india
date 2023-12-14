import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <ul>
        <button onClick={() => props.changePage("register")}>Register</button>
        <button onClick={() => props.changePage("login")}>Login</button>
      </ul>
    </div>
  );
};

export default Navbar;
