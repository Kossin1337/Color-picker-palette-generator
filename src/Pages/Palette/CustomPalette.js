import React, { useState } from "react";
import { PaletteNavbarFunctions } from "./PaletteNavbarFunctions";
import { GeneratePalette } from "./GeneratePalette";
import { createPalette } from "../../functions/createPalette";
import "./CustomPalette.scss";

export const CustomPalette = () => {
  const [lastPalette, setLastPalette] = useState(null);
  const [currentPalette, setCurrentPalette] = useState(createPalette());
  const [nextPalette, setNextPalette] = useState(null);
  const [paletteCount, setPaletteCount] = useState(5);

  function handleClickIfSpacebar(event) {
    console.log("sqrrt");
    console.log(event.charCode);
  }

  function generatePalette() {
    setLastPalette(currentPalette);
    setCurrentPalette(createPalette(paletteCount));
  }

  return (
    <div className="palette-wrapper">
      <div className="palette-navigation" id="palette-navigation">
        <div className="nav-info">
          <p
            className="generate-palette"
            onClick={generatePalette}
            onKeyPress={handleClickIfSpacebar}
          >
            Press spacebar to generate {paletteCount} colors
          </p>
          <input
            type="range"
            id="palettes"
            name="palettes"
            min="5"
            max="9"
            value={paletteCount}
            onChange={(event) => setPaletteCount(event.target.value)}
            step="1"
          ></input>
        </div>
        <PaletteNavbarFunctions
          lastPalette={lastPalette}
          setLastPalette={setLastPalette}
          currentPalette={currentPalette}
          setCurrentPalette={setCurrentPalette}
          nextPalette={nextPalette}
          setNextPalette={setNextPalette}
        />
      </div>
      <GeneratePalette currentPalette={currentPalette} />
    </div>
  );
};
