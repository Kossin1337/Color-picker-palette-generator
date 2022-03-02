import React, { useState } from "react";
import { DisplayColors } from "./DisplayColors";
import { DisplayPalettes } from "./DisplayPalettes";

import "./Favorite.scss";

export const Favorite = () => {
  const [displayColors, setDisplayColors] = useState(true);

  /* checking for the current display and changing it */
  const changeDisplay = (e) => {
    return e.target.innerText === "Colors"
      ? setDisplayColors(true)
      : setDisplayColors(false);
  };

  return (
    <div className="fav-wrapper">
      <div className="fav-content">
        <div className="fav-menu">
          <span>Filter by:</span>
          <span className={`menu-item ${displayColors}`} onClick={changeDisplay} >
            Colors
          </span>
          <span className={`menu-item ${!displayColors}`} onClick={changeDisplay}>
            Palettes
          </span>
        </div>
        {displayColors ? <DisplayColors /> : <DisplayPalettes />}
      </div>
    </div>
  );
};
