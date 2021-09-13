import React, { useState } from "react";
import { createRGB } from "../../functions/createRGB";
import { createHEX } from "../../functions/createHEX";
import { createHSL } from "../../functions/createHSL";
import "./ColorGenerator.css";

export function ColorGenerator({ changeBackground, setFavColors }) {
  const [color, setColor] = useState("#121212");

  function generateRGB() {
    const [color] = createRGB();
    setColor(color);
    changeBackground(color);
  }

  function generateHEX() {
    const [color] = createHEX();
    setColor(color);
    changeBackground(color);
  }

  function generateHSL() {
    const [color] = createHSL();
    setColor(color);
    changeBackground(color);
  }

  function copyToClipboard() {
    console.log("copied");
  }

  function addToFavorites() {
    console.log(`Added ${color} item to favorites`);
    setFavColors((prevColors) => [...prevColors, color]);
  }

  return (
    <div className="color-switcher">
      <h2>Generate random color</h2>
      <div className="color-switcher-buttons">
        <button onClick={generateRGB} className="color-btn" id="rgb">
          RGB
        </button>
        <button onClick={generateHEX} className="color-btn" id="hex">
          HEX
        </button>
        <button onClick={generateHSL} className="color-btn" id="hsl">
          HSL
        </button>
      </div>
      <div className="color-result">
        <h3>{color}</h3>
        <i className="fas fa-copy" onClick={copyToClipboard}></i>
        <i className="far fa-heart" onClick={addToFavorites}></i>
      </div>
    </div>
  );
}
