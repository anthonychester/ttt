import React from "react";

declare var require: any;

export class Signin extends React.Component {
  press(from: string) {
    console.log(from);
  }

  render() {
    return (
      <div className="Signin">
        <div id="panel">
          <div>
            <div className="line">
              <h3>Username/Email: </h3>
              <input type="text"></input>
            </div>
            <div className="line">
              <h3>Password: </h3>
              <input type="text"></input>
            </div>
          </div>
          <div className="line">
            <button
              onClick={() => {
                this.press("email");
              }}>
              Login
            </button>
          </div>
          <div className="line">
            <hr></hr>
            <h5>or</h5>
            <hr></hr>
          </div>
          <div className="line" id="end">
            <img
              src={require("./icons/Google.png")}
              alt="Google"
              onClick={() => {
                this.press("google");
              }}></img>
            <img
              src={require("./icons/Facebook.png")}
              alt="Facebook"
              onClick={() => {
                this.press("facebook");
              }}></img>
            <img
              src={require("./icons/Github.png")}
              alt="Github"
              onClick={() => {
                this.press("github");
              }}></img>
            <img
              src={require("./icons/Microsoft.png")}
              alt="Mircosoft"
              onClick={() => {
                this.press("mircosoft");
              }}></img>
          </div>
        </div>
      </div>
    );
  }
}
