import React from "react";

import "../generate.css";

export default class MmsBox extends React.Component {
  render() {
    return (
      <div>
        <div className="label">
          <h2>MMS</h2>
        </div>
        <div>
          <textarea className="mms-box" placeholder="Notes output" />
        </div>
      </div>
    );
  }
}
