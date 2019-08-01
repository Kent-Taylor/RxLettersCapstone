import React from "react";
import RxLettersLogo from "../images/RxLettersLogo.png";
import { NavLink } from "react-router-dom";

import "../styles.css";

export default class Signup extends React.Component {
  render() {
    return (
      <form>
        <div className="page-container">
          <img src={RxLettersLogo} alt="" className="book-img" />
          <div className="form">
            <div className="choice-tab">
              <NavLink exact activeClassName="active" to="/">
                Login
              </NavLink>
              <NavLink activeClassName="active" to="/signup">
                Sign-Up
              </NavLink>
            </div>
            <div>
              <label className="signup-labels">Full Name:</label>
              <input
                type="text"
                className="signup-input"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="signup-labels">Work Email:</label>
              <input
                type="email"
                className="signup-input"
                placeholder="Enter your work email"
              />
            </div>
            <div>
              <label className="signup-labels">Password:</label>
              <input
                type="password"
                className="signup-input"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="signup-labels">Confirm Password:</label>
              <input
                type="password"
                className="signup-input"
                placeholder="Comfirm your password"
              />
            </div>
            <div>
              <button className="btn-submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
