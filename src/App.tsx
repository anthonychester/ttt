import "./styles.css";
import React from "react";
import { motion } from "framer-motion";
//@ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface playerData {
  name: string;
  score: number;
  rank: number;
  totalGames: number;
  wins: number;
}

let leaderboardData: playerData[] = [];

let win: any = window;

win.playM = "local";
win.p1t = "X";
win.p2t = "O";
win.win = null;

for (let i = 0; i < 10; i++) {
  leaderboardData.push({
    name: "num" + i,
    score: 1000 - i * 75,
    rank: 12 - i,
    totalGames: 500 - i * 10,
    wins: 400 - 2 * i
  });
}

document.body.classList.toggle("dark-theme");

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

class Leaderboard extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
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
          <Spot pos="1" player={leaderboardData[0]} />
          <Spot pos="2" player={leaderboardData[1]} />
          <Spot pos="3" player={leaderboardData[2]} />
          <Spot pos="4" player={leaderboardData[3]} />
          <Spot pos="5" player={leaderboardData[4]} />
          <Spot pos="6" player={leaderboardData[5]} />
          <Spot pos="7" player={leaderboardData[6]} />
          <Spot pos="8" player={leaderboardData[7]} />
          <Spot pos="9" player={leaderboardData[8]} />
          <Spot pos="10" player={leaderboardData[9]} />
        </table>
      </div>
    );
  }
}

class Signin extends React.Component {
  render() {
    return <h1>Signin</h1>;
  }
}

class Register extends React.Component {
  render() {
    return <h1>Register</h1>;
  }
}

class Profile extends React.Component {
  render() {
    return <h1>Profile</h1>;
  }
}

class Settings extends React.Component {
  render() {
    return <h1>Settings</h1>;
  }
}

class Box extends React.Component<{ num: string; i: number }, {}> {
  state: any;
  props: any;
  constructor(props: any) {
    super(props);
    this.props = props;
    this.state = { spot: win.board[props.i], id: "p1", i: props.i };
  }

  press() {
    if (win.board[this.props.i] == null && win.win == null) {
      let i = this.props.i;
      if (win.turn === "p1") {
        win.board[i] = win.p1t;
      } else {
        win.board[i] = win.p2t;
      }

      this.setState({ id: win.turn, spot: win.board[i] });

      if (win.turn === "p1") {
        win.turn = "p2";
      } else {
        win.turn = "p1";
      }

      this.checkWin();
      win.infoUp({ turn: win.turn });
    }
  }

  checkWin() {
    let b = win.board;
    let arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];
    for (let i = 0; i < arr.length; i++) {
      //console.log("c");
      if (b[arr[i][0]] != null) {
        //console.log("!null");
        if (b[arr[i][0]] === b[arr[i][1]] && b[arr[i][1]] === b[arr[i][2]]) {
          if (b[arr[i][0]] === win.p1t) {
            win.win = "p1";
          } else if (b[arr[i][0]] === win.p1t) {
            win.win = "p2";
          }
        }
      }
    }
  }

  render() {
    return (
      <motion.button
        id={this.state.id}
        whileHover={{ scale: 1.05 }}
        className="box"
        onClick={this.press.bind(this)}
      >
        {this.state.spot}
      </motion.button>
    );
  }
}

class Board extends React.Component {
  state: any;
  constructor(props: any) {
    super(props);

    win.turn = "p1";

    win.board = [null, null, null, null, null, null, null, null, null];
  }

  render() {
    if (win.playM === "local") {
      return (
        <div className="board">
          <Box i={0} />
          <Box i={1} />
          <Box i={2} />
          <Box i={3} />
          <Box i={4} />
          <Box i={5} />
          <Box i={6} />
          <Box i={7} />
          <Box i={8} />
        </div>
      );
    } else {
      return (
        <div className="board">
          <Box num="0" i={0} />
          <Box num="1" i={1} />
          <Box num="2" i={2} />
          <Box num="3" i={3} />
          <Box num="4" i={4} />
          <Box num="5" i={5} />
          <Box num="6" i={6} />
          <Box num="7" i={7} />
          <Box num="8" i={8} />
        </div>
      );
    }
  }
}
class Vs extends React.Component<
  { player1: playerData; player2: playerData },
  {}
> {
  player1: playerData;
  player2: playerData;
  constructor(props: any) {
    super(props);
    this.player1 = props.player1;
    this.player2 = props.player2;
    this.state = {};
  }

  render() {
    return (
      <div className="vs">
        <div>
          <h3>{this.player1.name}</h3>
          <h5>{this.player1.score}</h5>
        </div>
        <h1>Vs</h1>
        <div>
          <h3>{this.player2.name}</h3>
          <h5>{this.player2.score}</h5>
        </div>
      </div>
    );
  }
}
class Info extends React.Component<
  { player1: playerData; player2: playerData },
  {}
> {
  player1: playerData;
  player2: playerData;
  state: any;
  constructor(props: any) {
    super(props);
    this.player1 = props.player1;
    this.player2 = props.player2;
    this.state = { turn: "p1" };
    win.infoUp = this.setState.bind(this);
  }
  render() {
    return (
      <div className="info">
        <h1>Info</h1>
        <h3>{this.state.turn}</h3>
        <h3>{this.player2.name}</h3>
      </div>
    );
  }
}

class Play extends React.Component {
  componentDidMount() {
    document.title = "Play";
    document.body.classList.add("background-red");
  }

  render() {
    return (
      <div className="play">
        <Board />
        <Vs player1={leaderboardData[0]} player2={leaderboardData[1]} />
        <Info player1={leaderboardData[0]} player2={leaderboardData[1]} />
        <div className="cen-a">
          <h1 id="win"></h1>
        </div>
      </div>
    );
  }
}

export function Home() {
  return (
    <div className="App">
      <motion.div
        whileHover={{ scale: 1.05, rotate: 180 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%"
        }}
      >
        <h1>Hello CodeSandbox</h1>
      </motion.div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

class Navb extends React.Component {
  render() {
    if (localStorage.getItem("login") == null) {
      return (
        <Navbar collapseOnSelect expand="lg" className="Navbar">
          <Container>
            <Navbar.Brand href="/home">Triple T</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link eventKey={2} href="/signin">
                  Sign in
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Triple T</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
              </Nav>

              <NavDropdown title="Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }
}

export default function App() {
  return (
    <div>
      <Navb />
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/play">
              <Play />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
