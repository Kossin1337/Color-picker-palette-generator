import React, { useContext } from "react";
import { FavContext } from "../../App";
import { Palette } from "./Palette";

import "./DisplayPalettes.scss";

export const DisplayPalettes = () => {
  const { favoritePalettes, setFavoritePalettes } = useContext(FavContext);
  console.log(favoritePalettes);

  return (
    <div className="fav-palettes">
      {favoritePalettes.map((palette) => (
        <Palette palette={palette} />
      ))}
    </div>
  );
};
