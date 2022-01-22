import React from "react";

interface playerData {
  name: string;
  score: number;
  rank: number;
  totalGames: number;
  wins: number;
}

class Spot extends React.Component<{ pos: string; player: playerData }, {}> {
  state: any;
  constructor(props: any) {
    super(props);

    this.state = {
      name: props.player.name,
      score: props.player.score,
      rank: props.player.rank,
      totalGames: props.player.totalGames,
      wins: props.player.wins,
      pos: props.pos
    };
  }

  render() {
    return (
      <tr className="lbrow">
        <td className="lbrow">#{this.state.pos}</td>
        <td className="lbrow">{this.state.name}</td>
        <td className="lbrow">{this.state.score}</td>
        <td className="lbrow">{this.state.rank}</td>
        <td className="lbrow">{this.state.totalGames}</td>
        <td className="lbrow">{this.state.wins}</td>
        <td className="lbrow">
          {Math.round(this.state.totalGames / this.state.wins)}
        </td>
      </tr>
    );
  }
}

export class Leaderboard extends React.Component {
  leaderboardData: playerData[];
  constructor(props: any) {
    super(props);
    this.state = {};
    this.leaderboardData = [];
    for (let i = 0; i < 10; i++) {
      this.leaderboardData.push({
        name: "num" + i,
        score: 1000 - i * 75,
        rank: 12 - i,
        totalGames: 500 - i * 10,
        wins: 400 - 2 * i
      });
    }
  }

  render() {
    return (
      <div id="leaderboard">
        <h1>Leaderboard</h1>
        <table id="lbtable">
          <tr className="lbrow">
            <th>Pos</th>
            <th>Name</th>
            <th>Score</th>
            <th>Ranks</th>
            <th>Game</th>
            <th>Win</th>
            <th>W/L</th>
          </tr>
          <Spot pos="1" player={this.leaderboardData[0]} />
          <Spot pos="2" player={this.leaderboardData[1]} />
          <Spot pos="3" player={this.leaderboardData[2]} />
          <Spot pos="4" player={this.leaderboardData[3]} />
          <Spot pos="5" player={this.leaderboardData[4]} />
          <Spot pos="6" player={this.leaderboardData[5]} />
          <Spot pos="7" player={this.leaderboardData[6]} />
          <Spot pos="8" player={this.leaderboardData[7]} />
          <Spot pos="9" player={this.leaderboardData[8]} />
          <Spot pos="10" player={this.leaderboardData[9]} />
        </table>
      </div>
    );
  }
}
