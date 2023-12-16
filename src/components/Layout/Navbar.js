import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <ul>
        <button onClick={() => props.changePage("register")}>Create Room</button>
        <button onClick={() => props.changePage("login")}>Join Room</button>
      </ul>
    </div>
  );
};

export default Navbar;
