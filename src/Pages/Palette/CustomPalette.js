import React, { useState } from "react";
import "./CustomPalette.css";

export const CustomPalette = () => {
  const [colorsOnPalette, setColorsOnPalette] = useState(5);

  return (
    <div className="color-palette">
      <button className="generatePalette">Generate Palette</button>
    </div>
  );
};
