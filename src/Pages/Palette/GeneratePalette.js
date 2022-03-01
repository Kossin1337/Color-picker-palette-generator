import React from "react";

export const GeneratePalette = ({ currentPalette }) => {
  return (
    <div className="color-palette">
      {currentPalette.map((color, index) => {
        return (
          <div
            key={index}
            className="color-on-palette"
            style={{ backgroundColor: color }}
          >
            <span className="palette-color-name">{color}</span>
          </div>
        );
      })}
    </div>
  );
};
