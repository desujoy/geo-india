import classes from "./Room.module.css";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

const fetchUsers = async (room) => {
    const roomRef = doc(db, "rooms", room);
    const docSnap = await getDoc(roomRef);
    // console.log(docSnap.data());
    const users = docSnap.data().users;
    const sortedUsers = users.sort((a, b) => b.score - a.score);
    console.log(sortedUsers);
    console.log(sortedUsers.map((user, index) => user.username+" "+user.score+" "+index));
    return sortedUsers;
}

const Leaderboard = (props) => {
    const [sortedUsers, setSortedUsers] = useState([]);
    useEffect(() => {
        fetchUsers(props.roomName).then((users) => setSortedUsers(users));
    }, [props.roomName]);
  return (
    <div>
      <h1>Leaderboard</h1>
      <table className={classes["leaderboard-table"]}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{String(user.username)}</td>
                <td>{String(user.score)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
