import React, { useContext } from "react";
import { FavContext } from "../../App";

import "./PaletteNavbarFunctions.scss";

export const PaletteNavbarFunctions = ({
  lastPalette,
  setLastPalette,
  currentPalette,
  setCurrentPalette,
  nextPalette,
  setNextPalette,
  setSavedPalettes,
  setFavoritePalettes,
}) => {
  // const { setFavoritePalettes } = useContext(FavContext);

  function undoPalette() {
    if (lastPalette) {
      setNextPalette(currentPalette);
      setCurrentPalette(lastPalette);
      setLastPalette(null);
    } else {
      alert(`can't undo`);
    }
  }

  function redoPalette() {
    if (nextPalette) {
      setLastPalette(currentPalette);
      setCurrentPalette(nextPalette);
      setNextPalette(null);
    } else {
      alert(`Can't redo`);
    }
  }

  function savePalette() {
    setFavoritePalettes((prevPalettes) => [...prevPalettes, currentPalette]);
    console.log(`Saving ${currentPalette} to bookmarks`);
  }

  return (
    <div className="palette-functions">
      <div
        className={`palette-functions-item undo-palette ${
          lastPalette ? "btnActive" : "btnInactive"
        }`}
        onClick={undoPalette}
      >
        <i className="fas fa-undo"></i>
      </div>
      <div
        className={`palette-functions-item redo-palette ${
          nextPalette ? "btnActive" : "btnInactive"
        }`}
        onClick={redoPalette}
      >
        <i className="fas fa-redo"></i>
      </div>
      <div
        className="palette-functions-item save-palette"
        onClick={savePalette}
      >
        <i className="far fa-bookmark"></i>
      </div>
    </div>
  );
};
