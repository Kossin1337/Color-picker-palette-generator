import React, { useState, useEffect } from "react";

import { createRGB } from "../../functions/createRGB";
import { createHEX } from "../../functions/createHEX";
import { createHSL } from "../../functions/createHSL";
import { Alert } from "../../Components/Alert";

import "./ColorGenerator.scss";

export const ColorGenerator = ({ favColors, setFavColors }) => {
  const [color, setColor] = useState("#121212");
  const [status, setStatus] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (status === true) {
      setTimeout(() => {
        setStatus(false);
      }, 3000);
    }
  }, [status]);

  function generateRGB() {
    const [color] = createRGB();
    setColor(color);
  }

  function generateHEX() {
    const [color] = createHEX();
    setColor(color);
  }

  function generateHSL() {
    const [color] = createHSL();
    setColor(color);
  }

  function copyToClipboard() {
    console.log("copied");
  }

  function addToFavorites() {
    /* if color exists show an info msg */
    if (favColors[favColors.length - 1] === color) {
      setStatusMessage(`Color already added`);
      setStatusType("info");
    } else {
      /* add color to fav */
      setFavColors((prevColors) => [...prevColors, color]);
      setStatusType("add");
      setStatusMessage(`Color added`);
      setStatus(true);
      console.log(`Added ${color} item to favorites`);
    }
  }

  return (
    <div className="color-switcher" style={{ backgroundColor: `${color}` }}>
      {status && (
        <Alert
          type={statusType}
          message={statusMessage}
          setStatus={setStatus}
        />
      )}
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
        <i className="far fa-heart" onClick={addToFavorites}></i>
      </div>
    </div>
  );
};
