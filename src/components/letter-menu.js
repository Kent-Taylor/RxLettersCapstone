import React from "react";

export default class LetterMenu extends React.Component {
  constructor() {
    super();
  }
  //this.stuff = this.stuff.bind(this);
  render() {
    return (
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul className="menu">
            <button className="letter-button">Wrong Brand</button>
            <button className="letter-button">Not Dr's Pt.</button>
            <button className="letter-button">Altered</button>
            <button className="letter-button">Invalid Rx</button>
            <button className="letter-button">Cutt Off Image</button>
            <button className="letter-button">Opternative</button>
            <button className="letter-button">Missing ECP Phone</button>
            <button className="letter-button">Blurry Image</button>
            <button className="letter-button">Missing Signature</button>
            <button className="letter-button">Expired Rx</button>
            <button className="letter-button">Wrong Brand</button>
            <button className="letter-button">Not Dr's Pt.</button>
            <button className="letter-button">Altered</button>
            <button className="letter-button">Invalid Rx</button>
            <button className="letter-button">Cutt Off Image</button>
            <button className="letter-button">Opternative</button>
            <button className="letter-button">Missing ECP Phone</button>
            <button className="letter-button">Blurry Image</button>
            <button className="letter-button">Missing Signature</button>
            <button className="letter-button">Expired Rx</button>
          </ul>
        </div>
      </nav>
    );
  }
}
