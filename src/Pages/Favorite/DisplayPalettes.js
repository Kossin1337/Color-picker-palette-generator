import React, { useContext } from "react";
import { FavContext } from "../../App";
import { Palette } from "./Palette";

import "./DisplayPalettes.scss";

export const DisplayPalettes = () => {
  const { favoritePalettes } = useContext(FavContext);

  return (
    <div className="fav-palettes">
      {favoritePalettes.map((palette) => (
        <Palette palette={palette} />
      ))}
    </div>
  );
};
