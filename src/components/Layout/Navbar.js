import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <ul>
        <button onClick={() => props.changePage("create")}>Create Room</button>
        <button onClick={() => props.changePage("join")}>Join Room</button>
      </ul>
    </div>
  );
};

export default Navbar;
