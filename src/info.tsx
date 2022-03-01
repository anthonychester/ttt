import React from "react";

export class Info extends React.Component {
  render() {
    return (
      <div className="Info">
        <div className="Top">
          <div className="Player">
            <h2>Player1</h2>
            <h4 className="score" id="p1">
              1000
            </h4>
          </div>
          <h4 id="vs">vs.</h4>
          <div className="Player">
            <h2>Player2</h2>
            <h4 className="score" id="p2">
              1000
            </h4>
          </div>
        </div>
        <div className="Middle"></div>
        <div className="Bottom">
          <h3>End</h3>
          <h3>Forfeit</h3>
          <h3>Pause</h3>
        </div>
      </div>
    );
  }
}
