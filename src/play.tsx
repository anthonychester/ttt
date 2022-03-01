import React from "react";
import { Board } from "./board";
import { Info } from "./info";
import { Data } from "./data";
export class Play extends React.Component {
  componentDidMount() {
    document.title = "Play";
    document.body.classList.add("background-red");
  }

  render() {
    return (
      <div className="play">
        <div className="Board-half">
          <Board />
          <Data />
        </div>
        <div>
          <Info />
        </div>
      </div>
    );
  }
}
