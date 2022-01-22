import React from "react";

import { Box } from "./box";

let win: any = window;

export class Board extends React.Component {
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
