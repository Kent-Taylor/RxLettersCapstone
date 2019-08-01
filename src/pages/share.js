import React from "react";
import NavBar from "./navBar";
import LetterMenu from "../components/letter-menu";

import "../share.css";
import "../letter-menu.css";
import ComboBox from "../components/combobox";
import LetterBox from "../components/letter-box";
import LetterNotes from "../components/letter-notes";
import MmsBox from "../components/mms-box";
import { DropdownList } from "react-widgets";

const styles = {
  backgroundColor: "white",
  borderRadius: 10,
  height: "100vh",
  width: "100vw"
};

export default class Share extends React.Component {
  render() {
    return (
      <form style={styles}>
        <div>
          <NavBar />
          <div className="share-container">
            <div className="other-container">
              <div className="letter-menu">
                <LetterMenu />
              </div>
              <div className="other-letters">
                <LetterBox />
                <MmsBox />
                <LetterNotes />
              </div>
            </div>
            <div className="vt-line" />
            <div className="user-container">
              {/* <div className="letter-menu"><LetterMenu /></div> */}
              <div className="user-letters">
                <ComboBox />
                <LetterBox />
                <MmsBox />
                <LetterNotes />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
