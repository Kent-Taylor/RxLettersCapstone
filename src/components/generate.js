import React from "react";

import "../styles.css";
import "../generate.css";

import ComboBox from "../components/combobox";
import LetterBox from "./letter-box";

export default class Generate extends React.Component {
  render() {
    return (
      <div className="gen-page-container">
        <ComboBox />
        <LetterBox />
        <div className="gen-form" />
      </div>
    );
  }
}
