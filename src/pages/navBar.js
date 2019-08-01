import React from "react";
import { Cookie } from "js-cookie";
import Cookies from "js-cookie";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import RxLettersLogo from "../images/rxletters5.png";
import ContactsLogo from "../images/1800contacts_logo.png";

import "../styles.css";
import "../generate.css";
import Signin from "./signin";
import Share from "./share";
import Home from "./home";

const handleLogout = props => {
  Cookie.remove("username");
  Cookie.remove("password");
  this.props.history.push("/");
};

export default class NavBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <form onSubmit={handleLogout}>
          <div className="nav-bar">
            <div className="logo1">
              <img src={ContactsLogo} alt="" />
            </div>
            <div className="logo2">
              <img src={RxLettersLogo} alt="" />
            </div>
            <Switch>
              <div className="links-wrapper">
                <div className="link1">
                  <NavLink to="/home">Generate</NavLink>
                </div>
                <div className="link2">
                  <NavLink to="#">Options</NavLink>
                </div>
                <div className="link3">
                  <NavLink to="/share">Share</NavLink>
                </div>
              </div>
              <Route exact path="/" component={Signin} />
              <Route path="/home" component={Home} />
              <Route path="/share" component={Share} />
            </Switch>
            <p>{Cookies.get("username")}</p>

            <button className="signout-btn" type="submit">
              Sign-out
            </button>
            <div className="share" />
          </div>
        </form>
      </BrowserRouter>
    );
  }
}
