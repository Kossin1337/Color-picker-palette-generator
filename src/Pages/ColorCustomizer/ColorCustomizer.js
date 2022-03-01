import React, { useState } from "react";
import { ColorInputs } from "./ColorInputs";

import "./ColorCustomizer.scss";

export const ColorCustomizer = ({ setFavColors }) => {
  const [colorValues, setColorValues] = useState({
    r: 0,
    g: 0,
    b: 0,
  });
  const [color, setColor] = useState("#f512ff");

  function updateColor(color) {
    setColor(color);
  }

  function addToFavorites() {
    console.log(`Added ${color.hex} item to favorites`);
    setFavColors((prevColors) => [...prevColors, color]);
  }

  return (
    <div className="color-customizer-wrapper">
      <div className="color-customizer">
        <div className="color-column">
          <div
            className="color-box"
            style={{
              backgroundColor: `rgb(${colorValues.r}, ${colorValues.g}, ${colorValues.b})`,
            }}
          >
            <div className="color-tools"></div>
          </div>
          <ColorInputs
            colorValues={colorValues}
            setColorValues={setColorValues}
          />
        </div>
      </div>
    </div>
  );
};
