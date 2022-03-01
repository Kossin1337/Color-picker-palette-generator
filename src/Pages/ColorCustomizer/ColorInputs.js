import React from "react";

import "./ColorInputs.scss";

export const ColorInputs = ({ colorValues, setColorValues }) => {
  const checkRGB = (value) => {
    /* value is of type string */
    if (value >= 0 && value <= 255) {
      return true;
    }
    return false;
  };

  const changeR = (event) => {
    checkRGB(event.target.value);
    if (checkRGB(event.target.value)) {
      setColorValues((prevColors) => ({
        ...prevColors,
        r: event.target.value,
      }));
    }
  };

  const changeG = (event) => {
    if (checkRGB(event.target.value)) {
      setColorValues((prevColors) => ({
        ...prevColors,
        g: event.target.value,
      }));
    }
  };

  const changeB = (event) => {
    if (checkRGB(event.target.value)) {
      setColorValues((prevColors) => ({
        ...prevColors,
        b: event.target.value,
      }));
    }
  };

  return (
    <div className="color-inputs">
      <div className="input-row">
        <label>
          R
          <input
            type="range"
            className="range-input"
            id="r"
            name="r"
            min="0"
            max="255"
            value={colorValues.r}
            onChange={changeR}
            step="1"
          ></input>
        </label>
        <input
          type="text"
          className="text-input"
          value={colorValues.r}
          onChange={changeR}
        />
      </div>
      <div className="input-row">
        <label>
          G
          <input
            type="range"
            className="range-input"
            id="g"
            name="g"
            min="0"
            max="255"
            value={colorValues.g}
            onChange={changeG}
            step="1"
          ></input>
        </label>
        <input
          type="text"
          className="text-input"
          value={colorValues.g}
          onChange={changeG}
        />
      </div>
      <div className="input-row">
        <label>
          B
          <input
            type="range"
            className="range-input"
            id="b"
            name="b"
            min="0"
            max="255"
            value={colorValues.b}
            onChange={changeB}
            step="1"
          ></input>
        </label>
        <input
          type="text"
          className="text-input"
          value={colorValues.b}
          onChange={changeB}
        />
      </div>
      <h1 className="input-header">{`rgb(${colorValues.r}, ${colorValues.g}, ${colorValues.b})`}</h1>
    </div>
  );
};
