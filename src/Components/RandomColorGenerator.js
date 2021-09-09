import React, { useState } from "react";
import { createRGB, createHEX, createHSL } from "../colorFunctions";
import "./RandomColorGenerator.css";

export function RandomColorGenerator({ changeBackground, setFavColors }) {
  const [color, setColor] = useState(null);
  const [colorModel, setColorModel] = useState("HEX");

  function generateRGB() {
    setColorModel("RGB");
    const [color] = createRGB();
    setColor(color);
    changeBackground(color);
  }

  function generateHEX() {
    setColorModel("HEX");
    const [color] = createHEX();
    setColor(color);
    changeBackground(color);
  }

  function generateHSL() {
    setColorModel("HSL");
    const [color] = createHSL;
    console.log(`generated: ${color}`);
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
        <h3>{color ? color : "#000"}</h3>
        <i className="fas fa-copy" onClick={copyToClipboard}></i>
        <i className="far fa-heart" onClick={addToFavorites}></i>
      </div>
    </div>
  );
}
