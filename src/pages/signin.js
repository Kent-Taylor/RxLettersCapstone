import React from "react";
import Cookie from "js-cookie";
import { Link, NavLink } from "react-router-dom";
import RxLettersLogo from "../images/RxLettersLogo.png";

import "../styles.css";

function Signin(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    Cookie.set("username", username, { expires: 1 });
    Cookie.set("password", password, { expires: 1 });
    props.history.push("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
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
            <label className="signup-labels">Work Email:</label>
            <input
              type="email"
              placeholder="Enter your work email"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="signup-labels">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Login
            </button>
            <div className="forgot-account">
              <Link to="/generate">forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signin;
