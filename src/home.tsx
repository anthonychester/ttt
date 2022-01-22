import React from "react";
import { motion } from "framer-motion";
import { Board } from "./board";

export function Home() {
  return (
    <div className="home">
      <div>
        <h1>Play Tic-Tac-Toe Online</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          vivamus sed dolor egestas vel interdum luctus
        </p>
        <div id="buttons">
          <button id="Online">Online</button>
          <button id="Offline">Offline</button>
        </div>
      </div>
      <div id="board">
        <Board />
      </div>
    </div>
  );
}
