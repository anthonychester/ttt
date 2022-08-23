import React from "react";

declare var require: any;
let win: any = window;
let createUserWithEmailAndPassword = win.createUserWithEmailAndPassword;
let auth = win.auth;

export class Register extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
  }

  press(from: string) {
    if (from == "email") {
      console.log(this.state.email, this.state.password);

      win
        .createUserWithEmailAndPassword(
          auth,
          this.state.email,
          this.state.password
        )
        .then((userCredential: any) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error: any) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    }
  }

  usernameChange = (event: any) => {
    this.setState({ username: event.target.value });
  };
  emailChange = (event: any) => {
    this.setState({ email: event.target.value });
  };
  passwordChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="Signin">
        <div id="panel">
          <div>
            <div className="line">
              <h3>Username: </h3>
              <input type="text" onChange={this.usernameChange}></input>
            </div>
            <div className="line">
              <h3>Email: </h3>
              <input type="text" onChange={this.emailChange}></input>
            </div>
            <div className="line">
              <h3>Password: </h3>
              <input type="text" onChange={this.passwordChange}></input>
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
