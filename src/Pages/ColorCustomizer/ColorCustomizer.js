import React, { useState } from "react";
import { PhotoshopPicker, SliderPicker } from "react-color";

import "./ColorCustomizer.css";

export const ColorCustomizer = ({ setFavColors }) => {
  const [color, setColor] = useState("#f512ff");

  function updateSlider(color) {
    console.log("updating slider");
    setColor(color);
  }

  function copyToClipboard() {
    console.log("copied");
  }

  function addToFavorites() {
    console.log(`Added ${color} item to favorites`);
    setFavColors((prevColors) => [...prevColors, color]);
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
        <PhotoshopPicker
          color={color}
          header={"Color customizer"}
          onChangeComplete={(color) => setColor(color)}
        />
        <SliderPicker
          className="react-slider"
          color={color}
          onClick={updateSlider}
          onChangeComplete={(color) => setColor(color)}
        />
      </div>

      <div className="color-result">
        <div className="color-result-info">
          <h3>{color.hex}</h3>
          <i className="fas fa-copy" onClick={copyToClipboard}></i>
          <i className="far fa-heart" onClick={addToFavorites}></i>
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
    </div>
  );
};
