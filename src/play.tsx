import React from "react";
import { Board } from "./board";

export class Play extends React.Component {
  componentDidMount() {
    document.title = "Play";
    document.body.classList.add("background-red");
  }

  render() {
    return (
      <div className="play">
        <Board />
        <div className="cen-a"></div>
      </div>
    );
  }
}
