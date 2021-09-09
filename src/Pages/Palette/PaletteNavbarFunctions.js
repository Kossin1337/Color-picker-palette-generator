import React from "react";

export const PaletteNavbarFunctions = ({
  lastPalette,
  setLastPalette,
  currentPalette,
  setCurrentPalette,
  nextPalette,
  setNextPalette,
  savedPalettes,
  setSavedPalettes,
}) => {
  function undoPalette() {
    if (lastPalette) {
      setNextPalette(currentPalette);
      setCurrentPalette(lastPalette);
      setLastPalette(null);
    } else {
      alert(`can't undo`);
    }
    // console.log(
    //   `Undoing the palette and comming back to palette: ${lastPalette}`
    // );
  }

  function redoPalette() {
    if (nextPalette) {
      setLastPalette(currentPalette);
      setCurrentPalette(nextPalette);
      setNextPalette(null);
    } else {
      alert(`Can't redo`);
    }
    // console.log(
    //   `Redoing the palette and comming back to palette: ${nextPalette}`
    // );
  }

  function savePalette() {
    setSavedPalettes((prevPalettes) => [...prevPalettes, currentPalette]);
    console.log(`Saving CURRENT-PALETTE to bookmarks`);
    console.log(savedPalettes);
  }

  return (
    <div className="palette-functions">
      <div
        className="palette-functions-item undo-palette"
        onClick={undoPalette}
      >
        <i className="fas fa-undo"></i>
      </div>
      <div
        className="palette-functions-item redo-palette"
        onClick={redoPalette}
      >
        <i className="fas fa-redo"></i>
      </div>
      <div
        className="palette-functions-item save-palette"
        onClick={savePalette}
      >
        <i className="far fa-bookmark"></i> SAVE
      </div>
    </div>
  );
};
