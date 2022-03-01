import React, { useContext } from "react";
import { FavContext } from "../../App";

import "./DisplayColors.scss";

export const DisplayColors = () => {
  const { favoriteColors, setFavoriteColors } = useContext(FavContext);
  console.log(favoriteColors);

  return (
    <div className="fav-colors">
      {favoriteColors.map((color) => {
        return (
          <div className="color-box" style={{ backgroundColor: `${color}` }}>
            <div className="box-menu">
              <i className="fas fa-copy"></i>
              <i
                className="fas fa-trash"
                onClick={() =>
                  setFavoriteColors((prevColors) =>
                    prevColors.filter((curColor) => color !== curColor)
                  )
                }
              ></i>
            </div>
            {color}
          </div>
        );
      })}
    </div>
  );
};
