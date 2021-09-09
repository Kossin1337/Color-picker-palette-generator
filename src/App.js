import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { RandomColorGenerator } from "./Components/RandomColorGenerator";
import { Navigation } from "./Components/Navigation";

export function App() {
  const [backgroundColor, setBackgroundColor] = useState("#000");
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
          <RandomColorGenerator
            changeBackground={setBackgroundColor}
            setFavColors={setFavoriteColors}
          />
        </Route>
        <Route path="/color-customizer">
          <h1>Color Customizer</h1>
        </Route>
        <Route path="/color-palette">
          <h1>Color Palette</h1>
        </Route>
      </Switch>
    </Router>
  );
}
