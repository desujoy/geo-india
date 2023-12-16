import classes from './Room.module.css';

const Leaderboard = () => {
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
                <tr>
                    <td>1</td>
                    <td>user1</td>
                    <td>10000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>user2</td>
                    <td>9000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>user3</td>
                    <td>4000</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default Leaderboard;