import React, { useState, useEffect } from "react";
import { SketchPicker, SliderPicker } from "react-color";

import "./ColorCustomizer.css";

export const ColorCustomizer = ({ changeBackground, setFavColors }) => {
  const [color, setColor] = useState("#f512ff");

  useEffect(() => {
    changeBackground("#121212");
  }, []);

  function updateColor(color) {
    setColor(color);
  }

  function addToFavorites() {
    console.log(`Added ${color.hex} item to favorites`);
    setFavColors((prevColors) => [...prevColors, color.hex]);
  }

  function copyHEX() {
    console.log(color.hex);
  }

  function copyRGB() {
    const { r, g, b } = color.rgb;
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);
  }

  function copyHSL() {
    const { h, s, l } = color.hsl;
    const hslColor = `hsl(${Math.floor(h)}, ${Math.floor(
      s * 100
    )}, ${Math.floor(l * 100)})`;
    console.log(hslColor);
  }

  return (
    <div className="color-customizer">
      <div className="react-colors">
        <SketchPicker
          width={400}
          disableAlpha={true}
          presetColors={[]}
          color={color}
          header={"Color customizer"}
          onChange={updateColor}
        />
        <SliderPicker
          color={color}
          className="react-slider"
          onChange={updateColor}
        />
      </div>

      {color.hex && (
        <div>
          <div className="color-result">
            <div className="color-result-info">
              <h3>{color.hex}</h3>
              <i className="far fa-heart" onClick={addToFavorites}></i>
            </div>
          </div>
          <div className="copy-buttons">
            <button className="copy-btn" onClick={copyHEX}>
              Copy HEX
            </button>
            <button className="copy-btn" onClick={copyRGB}>
              Copy RGB
            </button>
            <button className="copy-btn" onClick={copyHSL}>
              Copy HSL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
