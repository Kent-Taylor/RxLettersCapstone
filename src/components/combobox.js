import React from "react";
import { Combobox } from "react-widgets";

import "../share.css";

let colors = [
  "wrong brand",
  "Not Dr's Pt.",
  "Altered Rx",
  "Invalid Rx",
  "Cut Off Image",
  "Opternative",
  "Missing ECP",
  "Blurry Image",
  "Missing info",
  "Expired Rx"
];

export default class ComboBox extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { value: "" };
  }
  render() {
    return (
      <div>
        <Combobox
          placeholder="search letter"
          className="combobox"
          suggest={true}
          type="custom"
          default={false}
          data={colors}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      </div>
    );
  }
}
