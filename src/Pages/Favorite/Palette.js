import React from "react";

import "./Palette.scss";

export const Palette = ({ palette }) => {
  return (
    <div className="palette">
      {palette.map((color, index) => {
        console.log(color);
        return (
          <div
            key={index}
            className="color-on-palette"
            style={{ backgroundColor: `${color}` }}
          >
            <p>{color}</p>
          </div>
        );
      })}
    </div>
  );
};
