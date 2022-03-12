import React from "react";
import { ArticleRGB } from "./ArticleRGB";
import { ArticleHEX } from "./ArticleHEX";
import { ArticleHSL } from "./ArticleHSL";
import { ArticleCMYK } from "./ArticleCMYK";
import { ArticleColorModels } from "./ArticleColorModels";
import { Route } from "react-router-dom";
import { InfoNavigation } from "./InfoNavigation";
import "./Blog.scss";

export const Blog = () => {
  return (
    <div className="color-info">
      <div className="articles-wrapper">
        <InfoNavigation />
        <div className="article-container">
          <Route exact path="/blog">
            <h2>
              Explore our articles to learn more about different color models
            </h2>
          </Route>
          <Route path="/blog/color-models">
            <ArticleColorModels />
          </Route>
          <Route path="/blog/rgb">
            <ArticleRGB />
          </Route>
          <Route path="/blog/hex">
            <ArticleHEX />
          </Route>
          <Route path="/blog/hsl">
            <ArticleHSL />
          </Route>
          <Route path="/blog/cmyk">
            <ArticleCMYK />
          </Route>
        </div>
      </div>
    </div>
  );
};
