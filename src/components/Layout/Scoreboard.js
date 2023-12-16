const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard__score">
        <h2>Score : {props.score} | Room : {props.room}</h2>
      </div>
    </div>
  );
};

export default Scoreboard;
