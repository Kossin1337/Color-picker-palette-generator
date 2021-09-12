import React, { useEffect } from "react";
import { ArticleRGB } from "./ArticleRGB";
import { ArticleHEX } from "./ArticleHEX";
import { ArticleHSL } from "./ArticleHSL";
import { Route } from "react-router-dom";
import "./Info.css";
import { InfoNavigation } from "./InfoNavigation";

export const Info = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground("#101010");
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
            <ArticleRGB />
          </Route>
          <Route path="/info/hex">
            <ArticleHEX />
          </Route>
          <Route path="/info/hsl">
            <ArticleHSL />
          </Route>
        </div>
      </div>
    </div>
  );
};
