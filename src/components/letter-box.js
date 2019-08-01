import React from "react";

import "../share.css";

export default class LetterBox extends React.Component {
  render() {
    return (
      <div>
        <div className="label">
          <h2>Email</h2>
        </div>
        <div>
          <div>
            <textarea className="email-box" placeholder="Letter output" />
          </div>
        </div>
      </div>
    );
  }
}
