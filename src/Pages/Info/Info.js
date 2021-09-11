import React, { useEffect } from "react";
import { Article } from "./Article";
import { Route } from "react-router-dom";
import "./Info.css";
import { InfoNavigation } from "./InfoNavigation";

export const Info = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground("#121212");
  }, []);

  return (
    <div className="color-info">
      <div className="articles-wrapper">
        <InfoNavigation />
        <div className="article-container">
          <Route exact path="/">
            <h2>
              Explore our articles to learn more about different color models
            </h2>
          </Route>
          <Route path="/info/rgb">
            <Article title={`RGB (Red, Green, Blue)`} />
          </Route>
          <Route path="/info/hex">
            <Article title={`HEX (Hexadecimal)`} />
          </Route>
          <Route path="/info/hsl">
            <Article title={`HSL (Hue, Saturation, Lightness)`} />
          </Route>
        </div>
      </div>
    </div>
  );
};
