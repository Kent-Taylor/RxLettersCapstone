import React from "react";

import "../generate.css";

export default class LetterNotes extends React.Component {
  render() {
    return (
      <div>
        <div className="label">
          <h2>Notes</h2>
        </div>
        <div>
          <textarea className="notes-box" placeholder="Notes output" />
        </div>
      </div>
    );
  }
}
