import React from "react";
import { ArticleRGB } from "./ArticleRGB";
import { ArticleHEX } from "./ArticleHEX";
import { ArticleHSL } from "./ArticleHSL";
import { Route } from "react-router-dom";
import "./Info.scss";
import { InfoNavigation } from "./InfoNavigation";

export const Info = () => {
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
