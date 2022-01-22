import React from "react";
import { motion } from "framer-motion";

let win: any = window;

export class Box extends React.Component<{ num: string; i: number }, {}> {
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
      //win.infoUp({ turn: win.turn });//def: this.setState.bind(this) @Info
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
        onClick={this.press.bind(this)}>
        {this.state.spot}
      </motion.button>
    );
  }
}
