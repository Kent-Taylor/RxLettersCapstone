import React from "react";
import Generate from "../components/generate";
import LetterMenu from "../components/letter-menu";
import NavBar from "./navBar";

import "../styles.css";
import "../generate.css";
import "../letter-menu.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="generate-container">
        <LetterMenu />
        <div className="generate-section">
          <Generate />
        </div>
        <div className="letter-generator">letter section</div>
      </div>
    </div>
  );
}
