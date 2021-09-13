import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ColorGenerator } from "./Pages/ColorGenerator/ColorGenerator";
import { Navigation } from "./Components/Navigation";
import { ColorCustomizer } from "./Pages/ColorCustomizer/ColorCustomizer";
import { CustomPalette } from "./Pages/Palette/CustomPalette";
import { Info } from "./Pages/Info/Info";

import "./App.css";

export function App() {
  const [backgroundColor, setBackgroundColor] = useState("#121212");
  const [favoriteColors, setFavoriteColors] = useState([]);

  // function addFavColor(color) {
  //   favoriteColors[favoriteColors.length] !== color
  //     ? setFavoriteColors((prevColors) => [...prevColors, color])
  //     : console.log("Color already added!");
  // }

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <Router>
      <div className="color-picker" style={{ backgroundColor }}>
        <Navigation favColors={favoriteColors.length} />
      </div>
      <Switch>
        <Route path="/color-generator">
          <ColorGenerator
            changeBackground={setBackgroundColor}
            setFavColors={setFavoriteColors}
          />
        </Route>

        <Route path="/color-customizer">
          <ColorCustomizer
            changeBackground={setBackgroundColor}
            setFavColors={setFavoriteColors}
          />
        </Route>

        <Route path="/color-palette">
          <CustomPalette changeBackground={setBackgroundColor} />
        </Route>

        <Route path="/info">
          <Info changeBackground={setBackgroundColor} />
        </Route>
      </Switch>
    </Router>
  );
}
