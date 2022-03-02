import React, { useState, useContext } from "react";
import { Alert } from "../../Components/Alert";
import { FavContext } from "../../App";

import "./PaletteNavbarFunctions.scss";

export const PaletteNavbarFunctions = ({
  lastPalette,
  setLastPalette,
  currentPalette,
  setCurrentPalette,
  nextPalette,
  setNextPalette,
}) => {
  const [status, setStatus] = useState(false);
  const [statusType, setStatusType] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const { favoritePalettes, setFavoritePalettes } = useContext(FavContext);

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
    if (
      currentPalette[4] &&
      favoritePalettes[favoritePalettes.length - 1] === currentPalette
    ) {
      setStatusMessage(`Palette already added`);
      setStatusType("info");
    } else {
      setFavoritePalettes((prevPalettes) => [...prevPalettes, currentPalette]);
      setStatusType("add");
      setStatusMessage(`Palette added`);
      setStatus(true);
    }
  }

  return (
    <div className="palette-functions">
      {status && (
        <Alert
          type={statusType}
          message={statusMessage}
          setStatus={setStatus}
        />
      )}
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
