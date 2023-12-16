import classes from './Room.module.css';
import { generateUsername } from 'unique-username-generator';

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
                    <td>{generateUsername()}</td>
                    <td>10000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{generateUsername()}</td>
                    <td>9000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>{generateUsername()}</td>
                    <td>4000</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default Leaderboard;