import "./styles.css";
import React from "react";
//@ts-ignore
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Leaderboard } from "./leaderboard";
import { Navb } from "./navb";
import { Home } from "./home";
import { Play } from "./play";
import { Register } from "./register";
import { Signin } from "./signin";
import { Settings } from "./settings";
import { Profile } from "./profile";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

let win: any = window;

win.playM = "local";
win.p1t = "X";
win.p2t = "O";
win.win = null;

document.body.classList.toggle("dark-theme");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2HmdSqOOxkwTLwFvh7jANJd9XOcyzsM0",
  authDomain: "ttt-online-57bd5.firebaseapp.com",
  projectId: "ttt-online-57bd5",
  storageBucket: "ttt-online-57bd5.appspot.com",
  messagingSenderId: "809302939107",
  appId: "1:809302939107:web:a43eb45aef49fded86fcd6",
  measurementId: "G-WL8W3CLW5P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
win.auth = getAuth();
win.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
win.signInWithEmailAndPassword = signInWithEmailAndPassword;
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
