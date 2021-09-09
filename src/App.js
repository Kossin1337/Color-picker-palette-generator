import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ColorGenerator } from "./Pages/ColorGenerator/ColorGenerator";
import { Navigation } from "./Components/Navigation";
import { CustomPalette } from "./Pages/Palette/CustomPalette";
import { Info } from "./Pages/Info/Info";

export function App() {
  const [backgroundColor, setBackgroundColor] = useState("#121212");
  const [favoriteColors, setFavoriteColors] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <Router>
      <div className="color-picker" style={{ backgroundColor }}>
        <Navigation favColors={favoriteColors} />
      </div>
      <Switch>
        <Route path="/color-generator">
          <ColorGenerator
            changeBackground={setBackgroundColor}
            setFavColors={setFavoriteColors}
          />
        </Route>

        <Route path="/color-customizer">
          <h1>Color Customizer</h1>
        </Route>

        <Route path="/color-palette">
          <CustomPalette changeBackground={setBackgroundColor} />
        </Route>

        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </Router>
  );
}
