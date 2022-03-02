import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ColorGenerator } from "./Pages/ColorGenerator/ColorGenerator";
import { Navigation } from "./Components/Navigation";
import { ColorCustomizer } from "./Pages/ColorCustomizer/ColorCustomizer";
import { CustomPalette } from "./Pages/Palette/CustomPalette";
import { Info } from "./Pages/Info/Info";
import { Favorite } from "./Pages/Favorite/Favorite";

import "./App.scss";

export const FavContext = React.createContext();

export function App() {
  const [favoriteColors, setFavoriteColors] = useState([]);
  const [favoritePalettes, setFavoritePalettes] = useState([]);

  return (
    <Router>
      <div className="color-picker">
        <Navigation favColors={favoriteColors.length} />
      </div>
      <FavContext.Provider
        value={{
          favoriteColors,
          setFavoriteColors,
          favoritePalettes,
          setFavoritePalettes,
        }}
      >
        <Switch>
          <Route path="/color-palette">
            <CustomPalette />
          </Route>

          <Route path="/color-generator">
            <ColorGenerator
              favColors={favoriteColors}
              setFavColors={setFavoriteColors}
            />
          </Route>

          <Route path="/color-customizer">
            <ColorCustomizer setFavColors={setFavoriteColors} />
          </Route>

          <Route path="/info">
            <Info />
          </Route>

          <Route path="/favorite">
            <Favorite />
          </Route>
        </Switch>
      </FavContext.Provider>
    </Router>
  );
}
