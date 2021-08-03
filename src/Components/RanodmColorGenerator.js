import React, { useState } from "react";
import { createRGB, createHEX, createHSL } from "../colorFunctions";

export function RanodmColorGenerator({ changeBackground }) {
  const [color, setColor] = useState(null);
  function generateRGB() {
    const color = createRGB();
    console.log(color);
    setColor(color);
    changeBackground(color);
  }

  function generateHEX() {
    const color = createHEX();
    console.log(color);
    setColor(color);
    changeBackground(color);
  }

  function generateHSL() {
    const color = createHSL;
    console.log(`generated: ${color}`);
    setColor(color);
    changeBackground(color);
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
      <h3>{color}</h3>
    </div>
  );
}
