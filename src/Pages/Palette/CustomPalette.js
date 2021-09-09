import React, { useState, useEffect } from "react";
import { PaletteNavbarFunctions } from "./PaletteNavbarFunctions";
import { GeneratePalette } from "./GeneratePalette";
import { createPalette } from "../../functions/createPalette";
import "./CustomPalette.css";

export const CustomPalette = ({ changeBackground }) => {
  const [lastPalette, setLastPalette] = useState(null);
  const [currentPalette, setCurrentPalette] = useState(createPalette());
  const [nextPalette, setNextPalette] = useState(null);
  const [savedPalettes, setSavedPalettes] = useState([]);

  useEffect(() => {
    changeBackground("#121212");
  }, []);

  useEffect(() => {}, [currentPalette]);

  function generatePalette() {
    setLastPalette(currentPalette);
    setCurrentPalette(createPalette());
  }

  return (
    <div className="palette-wrapper">
      <div className="palette-navigation" id="palette-navigation">
        <p className="generate-palette" onClick={generatePalette}>
          Press spacebar to generate palettes
        </p>
        <PaletteNavbarFunctions
          lastPalette={lastPalette}
          setLastPalette={setLastPalette}
          currentPalette={currentPalette}
          setCurrentPalette={setCurrentPalette}
          nextPalette={nextPalette}
          setNextPalette={setNextPalette}
          savedPalettes={savedPalettes}
          setSavedPalettes={setSavedPalettes}
        />
      </div>
      <GeneratePalette currentPalette={currentPalette} />
    </div>
  );
};
