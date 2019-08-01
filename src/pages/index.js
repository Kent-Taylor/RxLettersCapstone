import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";

import Signup from "./signup";
import Signin from "./signin";
import Share from "./share";

import "../styles.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/share" component={Share} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
