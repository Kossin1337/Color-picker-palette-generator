import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ColorGenerator } from "./Pages/ColorGenerator/ColorGenerator";
import { Navigation } from "./Components/Navigation";
import { ColorCustomizer } from "./Pages/ColorCustomizer/ColorCustomizer";
import { CustomPalette } from "./Pages/Palette/CustomPalette";
// import { Blog } from "./Pages/Blog/Blog";
import { Blog } from "./Pages/Blog/Blog";
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
          <Route path="/color-generator">
            <ColorGenerator
              favColors={favoriteColors}
              setFavColors={setFavoriteColors}
            />
          </Route>

          <Route path="/color-customizer">
            <ColorCustomizer setFavColors={setFavoriteColors} />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route exact path="/">
            <CustomPalette />
          </Route>
        </Switch>
      </FavContext.Provider>
    </Router>
  );
}
